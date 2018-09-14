import {Predicate, Predicatable} from "../_global";

declare function not<V = any>(predicate: Predicatable<V>): Predicate<V>;

export default not;
