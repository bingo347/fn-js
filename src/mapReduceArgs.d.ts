import {Mapper} from "./_global";

declare function mapReduceArgs<V = any, T = any, R = any>(mapper: Mapper<V, T>, reducer: (...args: T[]) => R): (...args: V[]) => R;
declare function mapReduceArgs<V = any, T = any, R = any>(mapper: Mapper<V, T>): (reducer: (...args: T[]) => R) => (...args: V[]) => R;

export default mapReduceArgs;
