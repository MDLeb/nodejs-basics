import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFrom = path.resolve(__dirname, 'files');
const pathTo = path.resolve(__dirname, 'files_copy');

const copy = async () => {
    if (!fs.existsSync(pathFrom) || fs.existsSync(pathTo)) {
        throw new Error('FS operation failed')
    } else {
        fs.mkdir(pathTo, (err) => {
            if (err) throw err;
            fs.readdirSync(pathFrom).forEach(fileName => {
                const fileBuffer = fs.readFileSync(`${pathFrom}/${fileName}`);
                fs.writeFileSync(`${pathTo}/${fileName}`, fileBuffer);
            })
        })
    }
};

await copy();
