import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ExtensionAPI, ExtensionContext } from "@earendil-works/pi-coding-agent";

const STATE_ENTRY = "i-have-dyslexia:state";
const STATUS_KEY = "i-have-dyslexia";

function loadRules(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const skillPath = join(here, "..", "skills", "i-have-dyslexia", "SKILL.md");
  const source = readFileSync(skillPath, "utf8");

  if (!source.startsWith("---")) return source.trim();

  const closingFence = source.indexOf("\n---", 3);
  if (closingFence === -1) return source.trim();

  return source.slice(closingFence + 4).trim();
}

function cleanExitPhrase(text: string): string {
  return text.trim().toLowerCase().replace(/[.!?]+$/, "").trim();
}

function isExitPhrase(text: string): boolean {
  const normalized = cleanExitPhrase(text);
  return normalized === "stop dyslexia mode" || normalized === "normal mode";
}

function quickAliasArgs(text: string): string | undefined {
  const trimmed = text.trim();
  const match = /^\\dys(?:\s+(.*))?$/i.exec(trimmed);
  return match ? (match[1] ?? "") : undefined;
}

function lastSavedState(ctx: ExtensionContext): boolean | undefined {
  let saved: boolean | undefined;

  for (const entry of ctx.sessionManager.getBranch()) {
    if (entry.type !== "custom" || entry.customType !== STATE_ENTRY) continue;
    const value = (entry.data as { enabled?: unknown } | undefined)?.enabled;
    if (typeof value === "boolean") saved = value;
  }

  return saved;
}

export default function dyslexiaMode(pi: ExtensionAPI) {
  const rules = loadRules();
  let enabled = false;

  const showState = (ctx: ExtensionContext) => {
    if (!ctx.hasUI) return;
    ctx.ui.setStatus(STATUS_KEY, enabled ? "dyslexia mode: on" : undefined);
  };

  const setEnabled = (next: boolean, ctx: ExtensionContext, persist = true) => {
    enabled = next;
    if (persist) pi.appendEntry(STATE_ENTRY, { enabled });
    showState(ctx);
  };

  const applyModeArgs = (
    args: string,
    ctx: ExtensionContext,
    emptyBehavior: "toggle" | "enable",
  ): boolean => {
    const option = args.trim().toLowerCase();

    if (!option) {
      setEnabled(emptyBehavior === "enable" ? true : !enabled, ctx);
      return true;
    }

    if (["on", "start", "enable"].includes(option)) {
      setEnabled(true, ctx);
      return true;
    }

    if (["off", "stop", "disable"].includes(option)) {
      setEnabled(false, ctx);
      return true;
    }

    return false;
  };

  const notifyState = (ctx: ExtensionContext) => {
    if (ctx.hasUI) {
      ctx.ui.notify(`Dyslexia mode ${enabled ? "enabled" : "disabled"}.`, "info");
    }
  };

  pi.registerFlag("dyslexia", {
    description: "Start the session with dyslexia-friendly response rules enabled",
    type: "boolean",
    default: false,
  });

  pi.registerCommand("i-have-dyslexia", {
    description: "Toggle dyslexia-friendly response formatting",
    handler: async (args, ctx) => {
      if (!applyModeArgs(args, ctx, "toggle")) {
        if (ctx.hasUI) {
          ctx.ui.notify("Use /i-have-dyslexia, /i-have-dyslexia on, or /i-have-dyslexia off.", "warning");
        }
        return;
      }
      notifyState(ctx);
    },
  });

  pi.registerCommand("dys", {
    description: "Quick alias for dyslexia-friendly response formatting",
    handler: async (args, ctx) => {
      if (!applyModeArgs(args, ctx, "enable")) {
        if (ctx.hasUI) {
          ctx.ui.notify("Use /dys, /dys on, or /dys off.", "warning");
        }
        return;
      }
      notifyState(ctx);
    },
  });

  pi.on("session_start", async (_event, ctx) => {
    const saved = lastSavedState(ctx);
    enabled = saved ?? Boolean(pi.getFlag("dyslexia"));

    if (pi.getFlag("dyslexia")) enabled = true;
    showState(ctx);
  });

  pi.on("input", async (event, ctx) => {
    if (event.source === "extension") return { action: "continue" };

    const aliasArgs = quickAliasArgs(event.text);
    if (aliasArgs !== undefined) {
      if (!applyModeArgs(aliasArgs, ctx, "enable")) {
        return {
          action: "transform",
          text: "The \\dys alias accepts no argument, on, or off. Explain that in one short sentence.",
        };
      }

      return {
        action: "transform",
        text: `Dyslexia mode is now ${enabled ? "on" : "off"}. Confirm that in one short sentence.`,
      };
    }

    if (!enabled || !isExitPhrase(event.text)) {
      return { action: "continue" };
    }

    setEnabled(false, ctx);
    return {
      action: "transform",
      text: "Dyslexia mode is now off. Confirm that in one short sentence, then use your normal response style.",
    };
  });

  pi.on("before_agent_start", async (event) => {
    if (!enabled) return;

    return {
      systemPrompt: `${event.systemPrompt}\n\n# Dyslexia-friendly response rules\n\n${rules}`,
    };
  });
}
