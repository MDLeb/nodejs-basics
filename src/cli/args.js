const parseArgs = () => {
    const args = process.argv;
    const result = [];

    args.forEach((arg, i) => {
        if (arg.startsWith('--')) {
            result.push(`${arg} is ${args[i + 1]}`)
        }
    });
    console.log(result.join(', '))
};

parseArgs();