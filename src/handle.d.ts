declare function handle<T = any>(...handlers: ((value: T) => void)[]): (value: T) => T;

export default handle;
