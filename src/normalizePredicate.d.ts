import {ValuePredicatable, ValuePredicate} from "./_global";

declare function normalizePredicate<V>(predicate: ValuePredicatable<V>): ValuePredicate<V>
