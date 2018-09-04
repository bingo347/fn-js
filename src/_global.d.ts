export type Predicate = (...args: any[]) => boolean;
export type ValuePredicate<V> = (value: V, ...args: any[]) => boolean;
export type Predicatable = Predicate | boolean;
export type ValuePredicatable<V> = ValuePredicate<V> | boolean;

export type Mapper<R> = (...args: any[]) => R;
export type ValueMapper<V, R> = (value: V, ...args: any[]) => R;
