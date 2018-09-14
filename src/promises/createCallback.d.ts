declare function createCallback(): {
    promise: Promise<any> | Promise<any[]>,
    callback: (err: Error, ...args: *) => void
};

export default createCallback;
