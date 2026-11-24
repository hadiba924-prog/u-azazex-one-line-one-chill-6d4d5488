// One Line, One Chill — make.fun bounty entry (u-azazex-one-line-one-chill-6d4d5488)
//
// Writes a single sentence of horror to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8, 1-200 chars, exactly one line, no trailing newline.
//
// The line: an ordinary, trusted routine (a dentist check-up) turns wrong
// inside the reader's own body — and the scare is still happening when the
// sentence ends, because the chewing has already begun.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The dentist found a second set of teeth growing behind mine, and they were already chewing.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

// The gate demands exactly one line and one sentence: no newline inside the
// line, no trailing whitespace, and a single sentence-ending period.
if (/\n/.test(LINE) || LINE !== LINE.trim() || (LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be a single line with exactly one sentence");
}

writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
