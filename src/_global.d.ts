export interface Mapper<V, R> {
    (value: V, ...args: any[]): R;
}

export interface Predicate<V> {
    (value: V, ...args: any[]): boolean;
    (value: V): boolean;
}

export type Predicatable<V> = Predicate<V> | boolean;
