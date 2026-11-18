// News image entry (Node 22, standard library only): copies the repository's editorial image to /output.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
// MAKEFUN_OUTPUT_DIR lets callers override the default /output destination.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
