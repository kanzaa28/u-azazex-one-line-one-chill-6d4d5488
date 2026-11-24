// SPDX-License-Identifier: MIT
// One Line, One Chill — entrypoint.
// Writes our single scariest sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My husband came home at six, kissed me, and ate dinner — and at seven, the police called to say his car went off the bridge at five.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 chars, not only
// whitespace, and a single line (no newline or carriage return). Fail loudly
// here instead of shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  !LINE.trim()
) {
  throw new Error(`invalid line: ${LINE.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
