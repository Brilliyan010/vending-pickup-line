// One Line, One Minute: The Vending Machine Pickup Line Contest.
// A vending machine flirts with a passing human. The program writes
// exactly one pickup line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), 200 characters at most. The punch lands
// on the last words: "fall" is both the snack dropping from the coil
// and the machine falling for the human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My coils have been saving the last one just for you. Press B7 — no exact change, no small talk, just let me fall for you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
