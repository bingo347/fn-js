declare function createPromise<T = any>(): {
    promise: Promise<T>,
    resolve: (value: T) => void,
    reject: (err: Error) => void
};

export default createPromise;
