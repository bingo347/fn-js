declare function createCallback(): {
    promise: Promise<any> | Promise<any[]>,
    callback: (err: Error, ...args: any[]) => void
};

export default createCallback;
