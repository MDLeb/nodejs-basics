import {createUnzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import {fileURLToPath} from "node:url";
import process from "node:process";
import {createReadStream, createWriteStream,} from "node:fs";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'archive.gz');
const destPath = path.resolve(__dirname, 'files', 'fileToCompress+.txt');

const decompress = async () => {
    const gzip = createUnzip();
    const source = createReadStream(filePath, {header: 'content-encoding'});
    const destination = createWriteStream(destPath)

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();