import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.resolve(__dirname, 'files');

const list = async () => {
    if (!fs.existsSync(dirPath)) {
        throw new Error('FS operation failed')
    } else {
        fs.readdirSync(dirPath).forEach(fileName => {
            console.log(fileName)
        })
    }
};

await list();