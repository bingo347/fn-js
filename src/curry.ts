import {Placeholder, isPlaceholder} from './placeholder';

interface CurriedFunction1<T1, R> {
    (): CurriedFunction1<T1, R>;
    (arg: T1): R;
}
interface CurriedFunction2<T1, T2, R> {
    (): CurriedFunction2<T1, T2, R>;
    (arg: T1): CurriedFunction1<T2, R>;
    (...args: [T1, T2]): R;
    (...args: [Placeholder, T2]): CurriedFunction1<T1, R>;
}
interface CurriedFunction3<T1, T2, T3, R> {
    (): CurriedFunction3<T1, T2, T3, R>;
    (arg: T1): CurriedFunction2<T2, T3, R>;
    (...args: [T1, T2]): CurriedFunction1<T3, R>;
    (...args: [T1, T2, T3]): R;
    (...args: [Placeholder, T2]): CurriedFunction2<T1, T3, R>;
    (...args: [Placeholder, T2, T3]): CurriedFunction1<T1, R>;
    (...args: [T1, Placeholder, T3]): CurriedFunction1<T2, R>;
    (...args: [Placeholder, Placeholder, T3]): CurriedFunction2<T1, T2, R>;
}
interface CurriedFunction4<T1, T2, T3, T4, R> {
    (): CurriedFunction4<T1, T2, T3, T4, R>;
    (arg: T1): CurriedFunction3<T2, T3, T4, R>;
    (...args: [T1, T2]): CurriedFunction2<T3, T4, R>;
    (...args: [T1, T2, T3]): CurriedFunction1<T4, R>;
    (...args: [T1, T2, T3, T4]): R;
    (...args: [Placeholder, T2]): CurriedFunction3<T1, T3, T4, R>;
    (...args: [Placeholder, T2, T3]): CurriedFunction2<T1, T4, R>;
    (...args: [T1, Placeholder, T3]): CurriedFunction2<T2, T4, R>;
    (...args: [T1, T2, Placeholder, T4]): CurriedFunction1<T3, R>;
    (...args: [T1, Placeholder, T3, T4]): CurriedFunction1<T2, R>;
    (...args: [Placeholder, T2, T3, T4]): CurriedFunction1<T1, R>;
    (...args: [Placeholder, Placeholder, T3]): CurriedFunction3<T1, T2, T4, R>;
    (...args: [Placeholder, Placeholder, Placeholder, T4]): CurriedFunction3<T1, T2, T3, R>;
    (...args: [T1, Placeholder, Placeholder, T4]): CurriedFunction2<T2, T3, R>;
    (...args: [Placeholder, T2, Placeholder, T4]): CurriedFunction2<T1, T3, R>;
    (...args: [Placeholder, Placeholder, T3, T4]): CurriedFunction2<T1, T2, R>;
}
interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (arg: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (...args: [T1, T2]): CurriedFunction3<T3, T4, T5, R>;
    (...args: [T1, T2, T3]): CurriedFunction2<T4, T5, R>;
    (...args: [T1, T2, T3, T4]): CurriedFunction1<T5, R>;
    (...args: [T1, T2, T3, T4, T5]): R;
    (...args: [Placeholder, T2]): CurriedFunction4<T1, T3, T4, T5, R>;
    (...args: [T1, Placeholder, T3]): CurriedFunction3<T2, T4, T5, R>;
    (...args: [Placeholder, T2, T3]): CurriedFunction3<T1, T4, T5, R>;
    (...args: [T1, T2, Placeholder, T4]): CurriedFunction2<T3, T5, R>;
    (...args: [T1, Placeholder, T3, T4]): CurriedFunction2<T2, T5, R>;
    (...args: [Placeholder, T2, T3, T4]): CurriedFunction2<T1, T5, R>;
    (...args: [T1, T2, T3, Placeholder, T5]): CurriedFunction1<T4, R>;
    (...args: [T1, T2, Placeholder, T4, T5]): CurriedFunction1<T3, R>;
    (...args: [T1, Placeholder, T3, T4, T5]): CurriedFunction1<T2, R>;
    (...args: [Placeholder, T2, T3, T4, T5]): CurriedFunction1<T1, R>;
    (...args: [Placeholder, Placeholder, T3]): CurriedFunction4<T1, T2, T4, T5, R>;
    (...args: [T1, Placeholder, Placeholder, T4]): CurriedFunction3<T2, T3, T5, R>;
    (...args: [Placeholder, T2, Placeholder, T4]): CurriedFunction3<T1, T3, T5, R>;
    (...args: [Placeholder, Placeholder, T3, T4]): CurriedFunction3<T1, T2, T5, R>;
    (...args: [T1, T2, Placeholder, Placeholder, T5]): CurriedFunction2<T3, T4, R>;
    (...args: [T1, Placeholder, T3, Placeholder, T5]): CurriedFunction2<T2, T4, R>;
    (...args: [T1, Placeholder, Placeholder, T4, T5]): CurriedFunction2<T2, T3, R>;
    (...args: [Placeholder, T2, T3, Placeholder, T5]): CurriedFunction2<T1, T4, R>;
    (...args: [Placeholder, T2, Placeholder, T4, T5]): CurriedFunction2<T1, T3, R>;
    (...args: [Placeholder, Placeholder, T3, T4, T5]): CurriedFunction2<T1, T2, R>;
    (...args: [Placeholder, Placeholder, Placeholder, T4]): CurriedFunction4<T1, T2, T3, T5, R>;
    (...args: [T1, Placeholder, Placeholder, Placeholder, T5]): CurriedFunction3<T2, T3, T4, R>;
    (...args: [Placeholder, T2, Placeholder, Placeholder, T5]): CurriedFunction3<T1, T3, T4, R>;
    (...args: [Placeholder, Placeholder, T3, Placeholder, T5]): CurriedFunction3<T1, T2, T4, R>;
    (...args: [Placeholder, Placeholder, Placeholder, T4, T5]): CurriedFunction3<T1, T2, T3, R>;
    (...args: [Placeholder, Placeholder, Placeholder, Placeholder, T5]): CurriedFunction4<T1, T2, T3, T4, R>;
}

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
function curry<T1, R>(fn: (arg: T1) => R, arity?: number): CurriedFunction1<T1, R>;
function curry<T1, T2, R>(fn: (...args: [T1, T2]) => R, arity?: number): CurriedFunction2<T1, T2, R>;
function curry<T1, T2, T3, R>(fn: (...args: [T1, T2, T3]) => R, arity?: number): CurriedFunction3<T1, T2, T3, R>;
function curry<T1, T2, T3, T4, R>(fn: (...args: [T1, T2, T3, T4]) => R, arity?: number): CurriedFunction4<T1, T2, T3, T4, R>;
function curry<T1, T2, T3, T4, T5, R>(fn: (...args: [T1, T2, T3, T4, T5]) => R, arity?: number): CurriedFunction5<T1, T2, T3, T4, T5, R>;
function curry(fn, arity = fn.length) {
    return curryNext(fn, [], arity);
}

export default curry;

type CurryNextResult<T1, T2, T3, T4, T5, R>
    = CurriedFunction1<T1, R>
    | CurriedFunction2<T1, T2, R>
    | CurriedFunction3<T1, T2, T3, R>
    | CurriedFunction4<T1, T2, T3, T4, R>
    | CurriedFunction5<T1, T2, T3, T4, T5, R>;

function curryNext<T1, T2, T3, T4, T5, R>(
    original
        : ((arg: T1) => R)
        | ((...args: [T1, T2]) => R)
        | ((...args: [T1, T2, T3]) => R)
        | ((...args: [T1, T2, T3, T4]) => R)
        | ((...args: [T1, T2, T3, T4, T5]) => R),
    prevArgs: [T1?, T2?, T3?, T4?, T5?],
    argsCount: number
): CurryNextResult<T1, T2, T3, T4, T5, R> {
    if(argsCount <= 0) {
        return original.apply(this, prevArgs);
    }
    function fn(...args: [T1?, T2?, T3?, T4?, T5?]): R {
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
    return fn as CurryNextResult<T1, T2, T3, T4, T5, R>;
}

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testAdd2 = curry((a: number, b: number) => a + b);
    const testAdd3 = curry((a: number, b: number, c: number) => a + b + c);
    const testPlaceholder = curry<any, Placeholder, any, [any, any, any]>((a: any, b: any, c: any) => [a, b, c]);
    const testContext = curry(function testName() {
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
        const placeholdered = testPlaceholder(0, new Placeholder(), 0);
        t.is(1, placeholdered.length);
        // @ts-ignore
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
