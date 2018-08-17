/**
 * @name createPromise
 * @returns {{promise: Promise, resolve: (value: *) => void, reject: (err: Error) => void}}
 */
function createPromise() {
    let promise, resolve, reject;
    promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    return {promise, resolve, reject};
}

export default createPromise;
