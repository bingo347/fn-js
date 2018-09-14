import {Predicate, Predicatable} from "../_global";

declare function or<V = any>(...predicates: Predicatable<V>): Predicate<V>;

export default or;
