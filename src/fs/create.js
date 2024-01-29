import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const newPath = path.resolve(__dirname, 'files', 'fresh.txt');

const create = async () => {
    if (fs.existsSync(newPath)) {
        throw new Error('FS operation failed')
        // rej();
    } else {
        fs.writeFile(newPath, 'I am fresh and young', (err) => {
        })
    }
};

await create();