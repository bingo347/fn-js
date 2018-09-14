export interface Mapper<V, R> {
    (value: V, ...args: any[]): R;
    (value: V): R;
    (): R;
}

export interface Predicate<V> {
    (value: V, ...args: any[]): boolean;
    (value: V): boolean;
    (): boolean;
}

export type Predicatable<V> = Predicate<V> | boolean;
