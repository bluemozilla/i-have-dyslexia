# Installation

This repository keeps the same skill content across hosts. The canonical copy is `skills/i-have-dyslexia/SKILL.md`.

## Quick alias installer

Run this once from the repository if you want the shortest user-level alias:

```bash
python3 scripts/install_alias.py
```

It installs a `dys` alias into the user-level locations used by shared Agent Skills, Claude Code, Cursor, Gemini CLI, and Qwen Code. The shared `~/.agents/skills/dys` copy is also discoverable by Kimi Code CLI.

To preview changes:

```bash
python3 scripts/install_alias.py --dry-run
```

To remove only the alias files installed by this project:

```bash
python3 scripts/install_alias.py --remove
```

The repository also bundles native `commands/dys.*` files. Hosts that load extension commands can expose a short `/dys` command automatically, subject to their own command namespacing rules.

## Claude Code

Add this repository as a plugin marketplace:

```text
/plugin marketplace add bluemozilla/i-have-dyslexia
```

Install the plugin:

```text
/plugin install i-have-dyslexia@bluemozilla-skills
```

Invoke its skill:

```text
/i-have-dyslexia:i-have-dyslexia
```

## Codex

The repository includes a root `.codex-plugin/plugin.json` and a project-level Agent Skill mirror at `.agents/skills/i-have-dyslexia/SKILL.md`.

When you open this repository in Codex, the `.agents/skills/` copy is available as a project skill.

For explicit skill use, open the skills picker or mention the skill by name in supported Codex surfaces.

## Gemini CLI

Install from GitHub:

```bash
gemini extensions install https://github.com/bluemozilla/i-have-dyslexia
```

Restart Gemini CLI after extension management changes. Gemini discovers Agent Skills under the extension's `skills/` directory.

## Qwen Code

Install from GitHub:

```bash
qwen extensions install bluemozilla/i-have-dyslexia
```

Invoke directly:

```text
/i-have-dyslexia
```

The `/skills` panel also shows installed skills.

## Kimi Code CLI

In the interactive client:

```text
/plugins install https://github.com/bluemozilla/i-have-dyslexia
/reload
```

Invoke the skill:

```text
/skill:i-have-dyslexia
```

The plugin deliberately does not use `sessionStart.skill`, so the skill is not forced on every new Kimi session.

## Pi

Install the Git package:

```bash
pi install git:github.com/bluemozilla/i-have-dyslexia
```

The fastest activation is the literal alias:

```text
\dys
```

Pi also registers the short slash command:

```text
/dys
/dys on
/dys off
```

The original toggle remains available:

```text
/i-have-dyslexia
```

Other accepted long-command forms:

```text
/i-have-dyslexia on
/i-have-dyslexia off
```

Start enabled from the terminal:

```bash
pi --dyslexia
```

While enabled, either exit phrase below disables the stored session state:

```text
stop dyslexia mode
normal mode
```

## Cursor

Cursor can discover project Agent Skills under `.agents/skills/`. Clone or open this repository as a project and use the skill from the slash menu when available.

For a personal installation, copy the skill to your user-level Cursor skills directory:

```bash
mkdir -p ~/.cursor/skills/i-have-dyslexia
cp skills/i-have-dyslexia/SKILL.md ~/.cursor/skills/i-have-dyslexia/SKILL.md
```

## Generic Agent Skills installation

For a host that supports the Agent Skills convention, copy this directory:

```text
skills/i-have-dyslexia/
```

into that host's supported skills location.
