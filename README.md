# One Line, One Chill

[![make.fun bounty](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/hadiba924-prog/u-azazex-one-line-one-chill-6d4d5488/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/hadiba924-prog/u-azazex-one-line-one-chill-6d4d5488/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

Entry for the [One Line, One Chill bounty](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488) on make.fun — one sentence of horror, under 200 characters.

## The line

> The dentist found a second set of teeth growing behind mine, and they were already chewing.

## Why it should scare

It takes the most ordinary, trusted routine imaginable — a dentist check-up — and turns it wrong *inside the reader's own body*. Nothing is announced as scary: no ghost, no monster, no darkness. The horror is concrete and specific (a second set of teeth, growing behind yours), and it is still happening when the sentence ends — "already chewing" means something in your mouth is eating, right now, and you cannot see it or stop it. The dread outlasts the line because the reader keeps feeling their own teeth afterwards. The final word lands the blow.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline. It guards that the line is 1–200 characters, a single line, and exactly one sentence.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-line-chill node main.ts
cat /tmp/one-line-chill/entry.txt
```

## Gate verification

- Output: UTF-8, exactly one sentence, one line, no trailing newline.
- Length: 91 characters (limit 200).
- Deterministic: running `main.ts` twice produces byte-identical output.
