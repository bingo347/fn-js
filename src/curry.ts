import __ from './placeholder';
type Placeholder = typeof __;

// normal types is crash TS compiler with high order functions
// need replace types for dist from curry.d.ts

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
function curry<F extends (...args: any[]) => any>(fn: F, arity: number = fn.length): (...args: any[]) => any {
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
): (...args: any[]) => any {
    if(argsCount <= 0) {
        return original.apply(this, prevArgs);
    }
    function fn(...args: any[]) {
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
    return fn;
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
