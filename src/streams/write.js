import {createWriteStream} from 'node:fs';
import {fileURLToPath} from "node:url";
import process from "node:process";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writable = createWriteStream(filePath);
    process.stdin.on('data', (chunk) => {
        writable.write(chunk);
    });
};

await write();