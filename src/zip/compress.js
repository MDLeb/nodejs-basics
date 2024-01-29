import {createGzip} from 'node:zlib';
import {pipeline } from 'node:stream';
import {fileURLToPath} from "node:url";
import process from "node:process";
import {createReadStream, createWriteStream,} from "node:fs";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const destPath = path.resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(filePath, {encoding: 'utf-8'});
    const destination = createWriteStream(destPath)

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await compress();