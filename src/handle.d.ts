declare function handle<T>(...handlers: ((value: T) => void)[]): (value: T) => T;

export default handle;
