import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune, exactly as the judge will read it.
// Why this line: the judge (a tired senior engineer) weighs, in order,
// fortune-cookie form, a truth about a developer's day, a fresh turn,
// and a quiet double meaning. The truth here is the one every senior
// knows: there is a module nobody dares change. The turn is that the
// fear is already too late — that code has its hands in everything.
// "Touch" does double duty (change it / it affects everything), which
// rewards the second read. One short balanced sentence, one breath,
// no slogan, no punchline, and no retread of the familiar sayings
// ("works on my machine", "Friday deploy", "rubber duck").
const FORTUNE =
  "The code you are afraid to touch has already touched everything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer only accepts 1–120 chars, one line.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.includes("\n")) {
  throw new Error(`fortune invalid: ${FORTUNE.length} chars`);
}
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
