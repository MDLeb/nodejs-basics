import fs from 'fs';
import path from 'path';
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const targetPath = path.resolve(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    if (!fs.existsSync(filePath) || fs.existsSync(targetPath)) {
        throw new Error('FS operation failed')
    } else {
        fs.renameSync(filePath, targetPath);
    }
};

await rename();