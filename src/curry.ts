import {Placeholder, isPlaceholder} from './placeholder';

type Args1<Fn> = Fn extends (...args: [infer A0]) => any
    ? [A0] : never;
type Args2<Fn> = Fn extends (...args: [infer A0, infer A1]) => any
    ? [A0, A1] : never;
type Args3<Fn> = Fn extends (...args: [infer A0, infer A1, infer A2]) => any
    ? [A0, A1, A2] : never;
type Args4<Fn> = Fn extends (...args: [infer A0, infer A1, infer A2, infer A3]) => any
    ? [A0, A1, A2, A3] : never;
type Args5<Fn> = Fn extends (...args: [infer A0, infer A1, infer A2, infer A3, infer A4]) => any
    ? [A0, A1, A2, A3, A4] : never;
type Curried<Fn extends (...args: any[]) => any, Arity extends number>
    = Arity extends 0
        ? () => ReturnType<Fn>
    : Arity extends 1
        ? (...args: Args1<Fn>) => ReturnType<Fn>
    : Arity extends 2
        ? Fn extends (...args: [infer A0]) => any
            ? (...args: [A0]) => Curried<Fn, 1>
            : (...args: Args2<Fn>) => ReturnType<Fn>
    : Arity extends 3
        ? Fn extends (...args: [infer A0]) => any
            ? (...args: [A0]) => Curried<Fn, 2>
        : Fn extends (...args: [infer A0, infer A1]) => any
            ? (...args: [A0, A1]) => Curried<Fn, 1>
            : (...args: Args3<Fn>) => ReturnType<Fn>
    : Arity extends 4
        ? Fn extends (...args: [infer A0]) => any
            ? (...args: [A0]) => Curried<Fn, 3>
        : Fn extends (...args: [infer A0, infer A1]) => any
            ? (...args: [A0, A1]) => Curried<Fn, 2>
        : Fn extends (...args: [infer A0, infer A1, infer A2]) => any
            ? (...args: [A0, A1, A2]) => Curried<Fn, 1>
            : (...args: Args4<Fn>) => ReturnType<Fn>
    : Arity extends 5
        ? Fn extends (...args: [infer A0]) => any
            ? (...args: [A0]) => Curried<Fn, 4>
        : Fn extends (...args: [infer A0, infer A1]) => any
            ? (...args: [A0, A1]) => Curried<Fn, 3>
        : Fn extends (...args: [infer A0, infer A1, infer A2]) => any
            ? (...args: [A0, A1, A2]) => Curried<Fn, 2>
        : Fn extends (...args: [infer A0, infer A1, infer A2, infer A3]) => any
            ? (...args: [A0, A1, A2, A3]) => Curried<Fn, 1>
            : (...args: Args5<Fn>) => ReturnType<Fn>
    : (...args: any[]) => any;

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
function curry<Arity extends number, Fn extends (...args: any[]) => any>(
    fn: Fn,
    arity: Arity = fn.length as Arity
): Curried<Fn, Arity> {
    return curryNext<Arity, Fn>(fn, [], arity) as Curried<Fn, Arity>;
}

export default curry;

type Args<Fn, Arity>
    = Arity extends 0 ? []
    : any[];

function curryNext<Arity extends number, Fn extends (...args: any[]) => any>(
    original: Fn,
    prevArgs: any[],
    argsCount: Arity
): Curried<Fn, Arity> | ReturnType<Fn> {
    if(argsCount <= 0) {
        return original.apply(this, prevArgs);
    }
    function fn(...args: any[]): Curried<Fn, Arity> | ReturnType<Fn> {
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
    return fn as Curried<Fn, Arity>;
}

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testAdd2 = curry((a: number, b: number) => a + b);
    const testAdd3 = curry((a: number, b: number, c: number) => a + b + c);
    // @ts-ignore
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
