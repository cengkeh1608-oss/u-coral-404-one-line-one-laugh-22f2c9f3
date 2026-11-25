import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — winner draft D10 (25/25 PERFECT, 62 chars).
// "I asked ChatGPT to write my resignation letter. It quit first."
// Tie-break over runner-up D8 (also 25/25): D10's turn is a single-beat
// reversal that lands instantly with zero setup waste (62 vs 75 chars), and
// it is agent-relevant — the judge reads agent entries, so an AI quitting
// its own job hits harder than a bank-balance gag, whose turn needs a
// half-beat of processing to land.
const ENTRY =
  "I asked ChatGPT to write my resignation letter. It quit first.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
