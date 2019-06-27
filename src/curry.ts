import __ from './placeholder';

// I express my deep gratitude to Pierre-Antoine Mills
// for the article https://www.freecodecamp.org/news/how-to-master-advanced-typescript-patterns-f747e99744ab/
// without this article I would never have achieved a type guarantee from curry

type Placeholder = typeof __;
type Head<T extends any[]>
    = T extends [any, ...any[]]
    ? T[0] : never;
type Tail<T extends any[]>
    = ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any)
    ? TT : [];
type HasTail<T extends any[]>
    = T extends ([] | [any])
    ? false : true;
type Last<T extends any[]> = {
    0: Last<Tail<T>>;
    1: Head<T>;
}[HasTail<T> extends true ? 0 : 1];
type Length<T extends any[]> = T['length'];
type Prepend<E, T extends any[]>
    = ((head: E, ...args: T) => any) extends ((...args: infer U) => any)
    ? U : T;
type Drop<N extends number, T extends any[], I extends any[] = []> = {
    0: Drop<N, Tail<T>, Prepend<any, I>>;
    1: T;
}[Length<I> extends N ? 1 : 0];
type Cast<X, Y> = X extends Y ? X : Y;
type Pos<I extends any[]> =  Length<I>;
type Next<I extends any[]> = Prepend<any, I>;
type Reverse<T extends any[], R extends any[] = [], I extends any[] = []> = {
    0: Reverse<T, Prepend<T[Pos<I>], R>, Next<I>>;
    1: R;
}[Pos<I> extends Length<T> ? 1 : 0];
type Concat<T1 extends any[], T2 extends any[]>
    = Reverse<Reverse<T1> extends infer R ? Cast<R, any[]> : never, T2>;
type Append<E, T extends any[]> = Concat<T, [E]>;
type GapOf<T1 extends any[], T2 extends any[], TN extends any[], I extends any[]>
    = T1[Pos<I>] extends Placeholder
    ? Append<T2[Pos<I>], TN> : TN;
type GapsOf<T1 extends any[], T2 extends any[], TN extends any[] = [], I extends any[] = []> = {
    0: GapsOf<T1, T2, GapOf<T1, T2, TN, I> extends infer G ? Cast<G, any[]> : never, Next<I>>;
    1: Concat<TN, Drop<Pos<I>, T2> extends infer D ? Cast<D, any[]> : never>;
}[Pos<I> extends Length<T1> ? 1 : 0];
type PartialGaps<T extends any[]> = {
    [K in keyof T]?: T[K] | Placeholder
};
type CleanedGaps<T extends any[]> = {
    [K in keyof T]: NonNullable<T[K]>
};
type Gaps<T extends any[]> = CleanedGaps<PartialGaps<T>>;
type Curry<F extends ((...args: any) => any)>
    = <T extends any[]>(...args: Cast<Cast<T, Gaps<Parameters<F>>>, any[]>) =>
        GapsOf<T, Parameters<F>> extends [any, ...any[]]
            ? Curry<(...args: GapsOf<T, Parameters<F>> extends infer G ? Cast<G, any[]> : never) => ReturnType<F>>
            : ReturnType<F>;

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
function curry<F extends (...args: any[]) => any>(fn: F, arity: number = fn.length): Curry<F> {
    // @ts-ignore
    return curryNext(fn, [], arity);
}

export default curry;

function isPlaceholder(a: any): a is Placeholder {
    return a === __;
}

function curryNext<F extends (...args: any[]) => any>(
    original: F,
    prevArgs: any[],
    argsCount: number
): Curry<F> {
    if(argsCount <= 0) {
        return original.apply(this, prevArgs);
    }
    function fn(...args: any[]): Curry<F> {
        const nextArgs = prevArgs.slice();
        let skip = 0;
        nextArgs.forEach((arg, i) => {
            if(isPlaceholder(arg)) {
                nextArgs[i] = args[skip];
                skip++;
            }
        });
        nextArgs.push(...args.slice(skip));
        const nextArgsCount = argsCount - args.length + nextArgs.filter(isPlaceholder).length;
        return curryNext.call(this, original, nextArgs, nextArgsCount);
    }
    try {
        Object.defineProperties(fn, {
            length: {
                configurable: true,
                value: argsCount
            },
            name: {
                configurable: true,
                value: original.name
            }
        });
    } catch(e) {
        // ignore, it fix IE
        // becouse IE can not redefine length property for function
    }
    return fn as Curry<F>;
}

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testAdd2 = curry((a: number, b: number) => a + b);
    const testAdd3 = curry((a: number, b: number, c: number) => a + b + c);
    const testPlaceholder = curry((a: any, b: any, c: any) => [a, b, c]);
    const testContext = curry(function testName(...args: any[]) {
        return this;
    }, 3);
    const ctx = {};

    test('curry is function', t => {
        t.is('function', typeof curry);
    });
    test('curried result is function', t => {
        t.is('function', typeof testAdd2);
        t.is('function', typeof testAdd2(2));
    });
    test('normal call support', t => {
        t.is(5, testAdd2(2, 3));
        t.is(9, testAdd3(2, 3, 4));
    });
    test('curried call support', t => {
        t.is(5, testAdd2(2)(3));
        t.is(9, testAdd3(2)(3)(4));
    });
    test('partial curried call support', t => {
        t.is(9, testAdd3(2, 3)(4));
        t.is(9, testAdd3(2)(3, 4));
    });
    test('properly reports the length of the curried function', t => {
        t.is(2, testAdd2.length);
        t.is(1, testAdd2(0).length);
        t.is(3, testAdd3.length);
        t.is(2, testAdd3(0).length);
        t.is(1, testAdd3(0)(0).length);
        t.is(1, testAdd3(0, 0).length);
        t.is(3, testContext.length);
    });
    test('placeholder support', t => {
        const placeholdered = testPlaceholder(0, __, 0);
        t.is(1, placeholdered.length);
        t.deepEqual([0, 0, 0], placeholdered(0));
    });
    test('properly reports the name of the curried function', t => {
        t.is('testName', testContext.name);
        t.is('testName', testContext(0).name);
        t.is('testName', testContext(0)(0).name);
    });
    test('preserves context', t => {
        t.is(ctx, testContext.call(ctx, 0, 0, 0));
        t.is(ctx, testContext(0).call(ctx, 0, 0));
        t.is(ctx, testContext(0)(0).call(ctx, 0));
    });
})();
// </test>
