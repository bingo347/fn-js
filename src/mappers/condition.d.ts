import {ValuePredicatable, ValueMapper} from "../_global";

declare function condition<V, R>(predicate: ValuePredicatable<V>, trueMapper: ValueMapper<V, R>, falseMapper?: ValueMapper<V, R>): ValueMapper<V, R>;
declare function condition<V, R>(predicate: ValuePredicatable<V>): (trueMapper: ValueMapper<V, R>, falseMapper?: ValueMapper<V, R>) => ValueMapper<V, R>;

export default condition;
