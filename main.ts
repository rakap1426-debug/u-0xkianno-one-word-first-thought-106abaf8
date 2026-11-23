import { mkdirSync, writeFileSync } from "node:fs";

// ponytail: fixed word, no input; swap the string to change the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "slumgullion");
