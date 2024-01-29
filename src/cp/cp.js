import { fork } from 'node:child_process';
import {fileURLToPath} from "node:url";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'script.js');


const spawnChildProcess = async (args) => {
    const cp = fork(filePath, args);
    cp.on('error', (err) => {
        console.log(err.message)
    });
};

spawnChildProcess( ['arg1']);
