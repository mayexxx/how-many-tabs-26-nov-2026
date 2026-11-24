import { mkdirSync, renameSync, writeFileSync } from 'node:fs';

const entry = '147';
if (!/^[0-9]{1,5}$/.test(entry)) throw new Error('Invalid entry');

mkdirSync('/output', { recursive: true });
const temporaryPath = '/output/entry.txt.tmp';
writeFileSync(temporaryPath, `${entry}\n`, 'utf8');
renameSync(temporaryPath, '/output/entry.txt');
