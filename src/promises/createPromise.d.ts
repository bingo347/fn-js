declare function createPromise<T>(): {
    promise: Promise<T>,
    resolve: (value: T) => void,
    reject: (err: Error) => void
};

export default createPromise;
