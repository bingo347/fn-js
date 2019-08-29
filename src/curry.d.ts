import __ from './placeholder';
declare type Placeholder = typeof __;
declare type Length<T extends any[]> = T['length'];
declare type Tail<T extends any[]> = ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any) ? TT : [];
declare type Prepend<E, T extends any[]> = ((head: E, ...args: T) => any) extends ((...args: infer U) => any) ? U : T;
declare type Drop<N extends number, T extends any[], I extends any[] = []> = {
    0: Drop<N, Tail<T>, Prepend<any, I>>;
    1: T;
}[Length<I> extends N ? 1 : 0];
declare type Cast<X, Y> = X extends Y ? X : Y;
declare type Pos<I extends any[]> = Length<I>;
declare type Next<I extends any[]> = Prepend<any, I>;
declare type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
    0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>;
    1: R;
}[Pos<I> extends Length<T> ? 1 : 0];
declare type Concat<T1 extends any[], T2 extends any[]> = Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>;
declare type Append<E, T extends any[]> = Concat<T, [E]>;
declare type GapOf<T1 extends any[], T2 extends any[], TN extends any[], I extends any[]> = T1[Pos<I>] extends Placeholder ? Append<T2[Pos<I>], TN> : TN;
declare type GapsOf<T1 extends any[], T2 extends any[], TN extends any[] = [], I extends any[] = []> = {
    0: GapsOf<T1, T2, GapOf<T1, T2, TN, I> extends infer G ? Cast<G, any[]> : never, Next<I>>;
    1: Concat<TN, Drop<Pos<I>, T2> extends infer D ? Cast<D, any[]> : never>;
}[Pos<I> extends Length<T1> ? 1 : 0];
declare type PartialGaps<T extends any[]> = {
    [K in keyof T]?: T[K] | Placeholder;
};
declare type CleanedGaps<T extends any[]> = {
    [K in keyof T]: NonNullable<T[K]>;
};
declare type Gaps<T extends any[]> = CleanedGaps<PartialGaps<T>>;
declare type Curry<F extends ((...args: any) => any)> = <T extends any[]>(...args: Cast<Cast<T, Gaps<Parameters<F>>>, any[]>) => GapsOf<T, Parameters<F>> extends [any, ...any[]] ? Curry<(...args: GapsOf<T, Parameters<F>> extends infer G ? Cast<G, any[]> : never) => ReturnType<F>> : ReturnType<F>;
/**
 * Wrap given function to a curried variant.
 * @param fn given function
 * @param arity number of curried arguments in given function.
 * @returns curried function
 *
 * @example
 * const add = curry((num1, num2) => {
 *    return num1 + num2;
 * });
 * add(1, 2); // => 3
 * add(1)(2); // => 3
 * const add5 = add(5);
 * add5(3); // => 8
 * add5(4); // => 9
 *
 * curry((a, b, c) => {}).length; // => 3
 * curry((a, b, c = 0) => {}).length; // => 2
 * curry((a, b, c = 0) => {}, 3).length; // => 3
 *
 * const log = curry((...args) => console.log(args), 3);
 * log(1)(2)(3); // logged: [1, 2, 3]
 * log(1, 2)(3); // logged: [1, 2, 3]
 * log(1)(2, 3, 4); // logged: [1, 2, 3, 4]
 * log(1, 2); // not logged becose original function is not called
 */
declare function curry<F extends (...args: any[]) => any>(fn: F, arity?: number): Curry<F>;
export default curry;
