import {Mapper} from "../_global";

declare function chain<V, R>(...mappers: Mapper<V, R>[]): Mapper<V, R>;

export default chain;
