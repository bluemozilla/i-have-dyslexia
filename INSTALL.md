# Installation

There is one Agent Skill in this repository:

```text
i-have-dyslexia
```

Its file is:

```text
skills/i-have-dyslexia/SKILL.md
```

Short `dys` forms are commands or host shortcuts. They do not install another skill.

## Claude Code

```text
/plugin marketplace add bluemozilla/i-have-dyslexia
/plugin install i-have-dyslexia@bluemozilla-skills
/i-have-dyslexia:i-have-dyslexia
```

## Codex

This repository includes:

```text
.codex-plugin/plugin.json
.agents/skills/i-have-dyslexia/SKILL.md
```

Open the skills picker or mention `i-have-dyslexia` where Agent Skills are supported.

## Gemini CLI

```bash
gemini extensions install https://github.com/bluemozilla/i-have-dyslexia
```

Restart Gemini CLI after changing extensions.

Gemini discovers `i-have-dyslexia` from the repository's `skills/` directory.

## Qwen Code

```bash
qwen extensions install bluemozilla/i-have-dyslexia
```

Then use:

```text
/i-have-dyslexia
```

## Kimi Code CLI

```text
/plugins install https://github.com/bluemozilla/i-have-dyslexia
/reload
/skill:i-have-dyslexia
```

## Pi

```bash
pi install git:github.com/bluemozilla/i-have-dyslexia
```

Pi supports these forms for the same mode:

```text
\dys
/dys
/dys on
/dys off
/i-have-dyslexia
/i-have-dyslexia on
/i-have-dyslexia off
```

Start enabled:

```bash
pi --dyslexia
```

Turn it off with:

```text
stop dyslexia mode
normal mode
```

## Cursor

For a personal installation:

```bash
mkdir -p ~/.cursor/skills/i-have-dyslexia
cp skills/i-have-dyslexia/SKILL.md ~/.cursor/skills/i-have-dyslexia/SKILL.md
```

## Generic Agent Skills hosts

Copy this folder:

```text
skills/i-have-dyslexia/
```

to the skills location supported by your host.

## Optional short command aliases

The repository includes `commands/dys.toml` and `commands/dys.md`.

If you cloned the repository, this helper installs only command aliases for Gemini CLI and Qwen Code:

```bash
python3 scripts/install_alias.py
```

Preview first:

```bash
python3 scripts/install_alias.py --dry-run
```

Remove those command aliases with:

```bash
python3 scripts/install_alias.py --remove
```

The helper does **not** install a second Agent Skill.
