import {Predicate, Predicatable} from "../_global";

declare function and<V = any>(...predicates: Predicatable<V>): Predicate<V>;

export default and;
