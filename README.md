<p align="center">
  <img src="./logo.png" alt="i-have-dyslexia logo" width="760" />
</p>

# i-have-dyslexia

**Version 1.1.2**

AI answers can be useful and still be tiring to read.

`i-have-dyslexia` changes the **shape of the answer**. It keeps the meaning, code, numbers, and important details.

The goal is simple: make responses easier to decode and scan.

[Português (Brasil)](README.pt-BR.md) · [Full install guide](INSTALL.md)

## What changes

When the skill is active, the assistant should:

- use **short sentences** with one main idea;
- break text into **small sections** with more white space;
- prefer **plain words** and explain technical terms once;
- use **lists and clear headings** when they help;
- keep **code, numbers, quotes, legal, and medical wording exact** when precision matters.

There is **one skill only**. Its rules live in [`skills/i-have-dyslexia/SKILL.md`](skills/i-have-dyslexia/SKILL.md).

## Turn it on

Use the skill name:

```text
/i-have-dyslexia
```

Some apps also provide short commands such as:

```text
\dys
/dys
```

Those are shortcuts to the same skill. They are not separate skills.

To turn the mode off, say:

```text
stop dyslexia mode
```

or:

```text
normal mode
```

## Install

Choose your tool below.

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

### Qwen Code

```bash
qwen extensions install bluemozilla/i-have-dyslexia
```

Then use `/i-have-dyslexia`.

### Kimi Code CLI

```text
/plugins install https://github.com/bluemozilla/i-have-dyslexia
/reload
/skill:i-have-dyslexia
```

### Pi

```bash
pi install git:github.com/bluemozilla/i-have-dyslexia
```

Pi supports `\dys`, `/dys`, `/i-have-dyslexia`, and `--dyslexia`.

### Cursor and other Agent Skills hosts

The skill is in:

```text
skills/i-have-dyslexia/
```

Copy that folder to the skills directory supported by your app.

See [INSTALL.md](INSTALL.md) for host-specific details.

## A note about persistence

The skill asks the assistant to keep dyslexia mode active until you turn it off.

Some apps may reload skills differently between turns.

**Pi stores the mode in the session**, so it stays active there until you disable it.

## License

MIT. See [LICENSE](LICENSE).

Maintained by [bluemozilla](https://github.com/bluemozilla).
