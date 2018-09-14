import {Predicate, Mapper} from "../_global";

declare function condition<V = any, R = any>(predicate: Predicate<V>, trueMapper: Mapper<V, R>, falseMapper?: Mapper<V, R>): Mapper<V, R>;
declare function condition<V = any, R = any>(predicate: Predicate<V>): (trueMapper: Mapper<V, R>, falseMapper?: Mapper<V, R>) => Mapper<V, R>;

export default condition;
