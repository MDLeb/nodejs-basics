import {Transform} from 'node:stream';

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk
                .toString()
                .replace('\n', '')
                .split('')
                .reverse().join('')
                .concat('\n'));
        },
    });

    process.stdin.pipe(transform).pipe(process.stdout);

};

await transform();