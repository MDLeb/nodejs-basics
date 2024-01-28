// args.js— реализовать функцию, которая анализирует аргументы командной строки
// (заданные в формате --propName value --prop2Name value2, вам не нужно проверять их)
// и выводит их на консоль в формате propName is value, prop2Name is value2

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