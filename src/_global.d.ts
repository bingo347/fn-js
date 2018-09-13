export interface Predicate {
    (...args: any[]): boolean;
}

export interface ValuePredicate<V> {
    (value: V, ...args: any[]): boolean;
}

export interface Mapper<R> {
    (...args: any[]): R;
}

export interface ValueMapper<V, R> {
    (value: V, ...args: any[]): R;
}

export type Predicatable = Predicate | boolean;
export type ValuePredicatable<V> = ValuePredicate<V> | boolean;
