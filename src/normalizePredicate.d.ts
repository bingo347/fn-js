import {Predicatable, Predicate} from "./_global";

declare function normalizePredicate<V = any>(predicate: Predicatable<V>): Predicate<V>;
