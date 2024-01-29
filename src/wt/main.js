import {Worker} from 'node:worker_threads';
import {cpus} from 'node:os';
import {fileURLToPath} from "node:url";
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.resolve(__dirname, 'worker.js');

const performCalculations = async () => {
    let result = [];
    const cpu = cpus();
    const workers = [];

    cpu.forEach((c, ind) => {
        const worker = new Worker(workerPath, {
            workerData: 10 + ind,
        });
        workers.push(worker)
        worker.on('message', (data) => {
            result[ind] = {'status': 'resolved', data};
        });
        worker.on('error', () => {
            result[ind] = {'status': 'error', 'data': null};
        });
        worker.once('exit', (code) => {
            if(result.filter(i => !i.status).length === 0){
                console.log(result);
            }
            if (code !== 0) {
                throw new Error(`Worker stopped with exit code ${code}`);
            }
        });
    });
};

await performCalculations();