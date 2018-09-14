import {Mapper} from "../_global";

declare function chain<V = any, R = any>(...mappers: Mapper<V, R>[]): Mapper<V, R>;

export default chain;
