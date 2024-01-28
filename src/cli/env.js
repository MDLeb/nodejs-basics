const parseEnv = () => {
    const envs = process.env;
    let result = [];
    for (let key in envs) {
        if (key.startsWith('RSS_')) {
            result.push(`${key}=${process.env[key]}`)
        }
    }
    console.log(result.join('; '));
};

parseEnv();