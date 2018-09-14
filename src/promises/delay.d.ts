declare function delay<T>(timeout: number): (argForChain: T) => Promise<T>;

export default delay;
