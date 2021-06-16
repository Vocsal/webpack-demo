export function square(x) {
    return x*x;
}

export function cube(x) {
    const y = x;
    logg(y);
    return x*x*x;
}

async function logg(y) {
    const testPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('test ' + y);
        }, 5000);
    })

    const ret = await testPromise;
    console.log('async await', ret)
    return ret;
}