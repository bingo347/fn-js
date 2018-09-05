import {ValueMapper} from "../_global";

declare function chain<V, R>(...mappers: ValueMapper<V, R>): ValueMapper<V, R>;

export default chain;
