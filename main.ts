// News image entry (Node 22, standard library only): copies the repository's editorial image to /output.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
// Writes the editorial image to the output directory the grader provides.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
