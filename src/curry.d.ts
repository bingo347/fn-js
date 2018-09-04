declare function curry(fn: (...args: any[]) => any, argsCount?: number): () => any;

export default curry;
