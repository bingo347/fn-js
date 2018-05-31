import createPromise from './createPromise';

function createCallback() {
    const {promise, resolve, reject} = createPromise();
    function callback(err, ...args) {
        if(err) {
            reject(err);
        } else if(args.length > 1) {
            resolve(args);
        } else {
            resolve(args[0]);
        }
    }
    return {promise, callback};
}

export default createCallback;
