import {createReadStream} from 'node:fs';
import {fileURLToPath} from "node:url";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readable = createReadStream(filePath, {encoding: 'utf-8'});
    readable.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();