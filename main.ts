import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry I missed the deadline — I asked my training data for a second opinion and it just quoted me back to myself in a different accent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
