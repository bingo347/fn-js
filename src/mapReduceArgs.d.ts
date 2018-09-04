import {ValueMapper} from "./_global";

declare function mapReduceArgs<V, T, R>(mapper: ValueMapper<V, T>, reducer: (...args: T[]) => R): (...args: V[]) => R;
declare function mapReduceArgs<V, T, R>(mapper: ValueMapper<V, T>): (reducer: (...args: T[]) => R) => (...args: V[]) => R;

export default mapReduceArgs;
