import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed')
    } else {
        fs.rmSync(filePath);
    }
};

await remove();