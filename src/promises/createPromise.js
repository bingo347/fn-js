function createPromise() {
    let promise, resolve, reject;
    promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    return {promise, resolve, reject};
}

export default createPromise;
