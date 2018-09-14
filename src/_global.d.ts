export interface Mapper<V = any, R = any> {
    (value: V, ...args: any[]): R;
    (value: V): R;
    (): R;
}

export interface Predicate<V = any> {
    (value: V, ...args: any[]): boolean;
    (value: V): boolean;
    (): boolean;
}

export type Predicatable<V = any> = Predicate<V> | boolean;
