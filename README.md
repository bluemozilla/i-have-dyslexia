<p align="center">
  <img src="./logo.png" alt="i-have-dyslexia logo" width="760" />
</p>

# i-have-dyslexia

**Release:** 1.0

A small Agent Skill that makes AI responses easier to scan and decode for readers with dyslexia.

It favors short sentences, plain words, frequent breaks, useful headings, and light punctuation. The rules live in one canonical `SKILL.md` so different agent hosts can use the same behavior.

**Maintained by [bluemozilla](https://github.com/bluemozilla).**

[Português (Brasil)](README.pt-BR.md) · [Install guide](INSTALL.md)

## What it changes

When the skill is active, the assistant should:

- keep **one main idea per sentence**;
- break dense text into **small, scannable sections**;
- prefer **plain wording** unless precision needs a technical term;
- use **lists and headings as landmarks**;
- leave the mode only after **`stop dyslexia mode`** or **`normal mode`**.

The full behavior is in [`skills/i-have-dyslexia/SKILL.md`](skills/i-have-dyslexia/SKILL.md).

## Quick alias: `\dys` / `/dys`

For the shortest activation path, use the quick alias tooling:

```bash
python3 scripts/install_alias.py
```

This installs a user-level `dys` alias for shared Agent Skills directories and the native command locations used by Claude Code, Gemini CLI, Qwen Code, and Cursor. Kimi can pick up the shared `~/.agents/skills/dys` alias.

**Pi supports the literal `\dys` input directly**, with no alias install needed. It also exposes `/dys`, `/dys on`, and `/dys off`.

Remove the user-level aliases with:

```bash
python3 scripts/install_alias.py --remove
```

## Supported hosts

| Host | Packaging in this repo | Typical use |
| --- | --- | --- |
| Claude Code | `.claude-plugin/` + `skills/` | Install the marketplace, then run the namespaced skill |
| Codex | `.codex-plugin/` + `.agents/skills/` | Plugin-ready metadata plus repo-local Agent Skill discovery |
| Gemini CLI | `gemini-extension.json` + `skills/` | Install as an extension; Gemini discovers bundled skills |
| Qwen Code | `qwen-extension.json` + `skills/` | Install as an extension; run `/i-have-dyslexia` |
| Kimi Code CLI | `kimi.plugin.json` + `skills/` | Install as a plugin; run `/skill:i-have-dyslexia` |
| Pi | `package.json` + TypeScript extension + `skills/` | Persistent toggle with `\dys`, `/dys`, `/i-have-dyslexia`, or `--dyslexia` |
| Cursor | `.agents/skills/` | Repo-local skill discovery and slash-menu invocation |

## Quick install

### Claude Code

```text
/plugin marketplace add bluemozilla/i-have-dyslexia
/plugin install i-have-dyslexia@bluemozilla-skills
/i-have-dyslexia:i-have-dyslexia
```

### Gemini CLI

```bash
gemini extensions install https://github.com/bluemozilla/i-have-dyslexia
```

Gemini discovers the bundled Agent Skill when the extension is installed.

### Qwen Code

```bash
qwen extensions install bluemozilla/i-have-dyslexia
```

Then run:

```text
/i-have-dyslexia
```

### Kimi Code CLI

Inside Kimi Code:

```text
/plugins install https://github.com/bluemozilla/i-have-dyslexia
/reload
/skill:i-have-dyslexia
```

### Pi

```bash
pi install git:github.com/bluemozilla/i-have-dyslexia
```

Then use the short alias:

```text
\dys
```

The slash form also works:

```text
/dys
```

The original command remains available:

```text
/i-have-dyslexia
```

Or start with it enabled:

```bash
pi --dyslexia
```

### Cursor and other Agent Skills hosts

The repo includes `.agents/skills/i-have-dyslexia/SKILL.md` for project-level discovery. For a personal/global installation, copy the same skill folder to the host's user-level skills directory.

See [`INSTALL.md`](INSTALL.md) for details and host-specific notes.

## Persistence is host-dependent

The `SKILL.md` tells the assistant to keep the mode active until an exit phrase is used. A host may still re-evaluate on-demand skills on later turns.

**Pi is the exception in this repo:** its extension stores the mode state in the session and injects the rules on every turn while enabled.

For other hosts, persistence depends on how that host manages loaded skills and conversation context.

## Repository layout

```text
skills/i-have-dyslexia/SKILL.md       canonical skill
.agents/skills/i-have-dyslexia/       repo-local Agent Skill mirror
.claude-plugin/                       Claude Code manifests
.codex-plugin/                        Codex plugin manifest
gemini-extension.json                 Gemini CLI extension manifest
qwen-extension.json                   Qwen Code extension manifest
kimi.plugin.json                      Kimi Code plugin manifest
extensions/i-have-dyslexia.ts         Pi persistent-mode extension
commands/dys.md + commands/dys.toml       short command aliases for compatible hosts
scripts/install_alias.py                  optional user-level alias installer
```

## License

MIT. See [`LICENSE`](LICENSE).
