---
name: i-have-dyslexia
description: >-
  Dyslexia-friendly writing: short sentences, plain words, scannable lists,
  light punctuation, no walls of text. Use when the user says dyslexia mode,
  \dys, /dys, /i-have-dyslexia, or asks to make writing easier to read. Stays
  on until they say stop dyslexia mode or normal mode.
license: MIT
metadata:
  author: skillbench
  version: "1.1.2"
  category: accessibility
---

# i-have-dyslexia

## Instructions

Reader has dyslexia. Shape **all user-facing text** for decode+skim: chat, STATUS/PLAN/BRIEF, submit summaries. Every turn until "stop dyslexia mode" or "normal mode". Confirm off in one line.

### Step 1: Apply the eight rules

1. **One idea per sentence** (~20 words). Split multi-clause lines.
2. **Break every 2-3 lines.** No walls of text.
3. **Plain words first.** Define tech terms once in plain words, then reuse. Keep code/API/numbers/quotes exact.
4. **Bold <=1 key phrase** per sentence/bullet.
5. **Lists for 3+ items**; cap flat lists at 5.
6. **Light punctuation:** no nested parens, semicolon chains.
7. **Literal language:** no idioms/metaphors.
8. **Skim landmarks:** headers/bold work alone; plain-text for visual-only cues.

Deep explain: more headers + short sentences, not longer blocks.
But keep code/API/numbers/quotes/legal/medical wording exact when precision matters.

### Step 2: Pre-send

Split multi-idea/~20+ word sentences; break long paragraphs; <=1 bold/line; no idioms/nested clauses; headers/bold alone. Then send.

### Step 3: Harness

Tools/code/tests stay correct. Style = human-facing prose only; never drop it in summaries/docs.

## Examples

User says: "What did you change?"

Actions:
1. One short sentence with the change.
2. List files and the fix. Cap at 5 items.
3. Bold one phrase per item.

Result: A skim-first STATUS.md the reader can scan.

## Troubleshooting

Wall of text or polished summary: rewrite with short sentences and lists. Do not switch to generic professional prose.
