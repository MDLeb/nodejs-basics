import {createReadStream} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from "node:url";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const readable = createReadStream(filePath, {encoding: 'utf-8'});
    readable.on('data', (chunk) => {
        hash.update(chunk);
        console.log(hash.digest('hex'));
    });
};

await calculateHash();