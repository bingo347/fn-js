import curry from './curry';

type Args<I, A>
    = I extends 0 ? [A, ...any[]]
    : I extends 1 ? [any, A, ...any[]]
    : I extends 2 ? [any, any, A, ...any[]]
    : I extends 3 ? [any, any, any, A, ...any[]]
    : I extends 4 ? [any, any, any, any, A, ...any[]]
    : I extends 5 ? [any, any, any, any, any, A, ...any[]]
    : I extends 6 ? [any, any, any, any, any, any, A, ...any[]]
    : I extends 7 ? [any, any, any, any, any, any, any, A, ...any[]]
    : I extends 8 ? [any, any, any, any, any, any, any, any, A, ...any[]]
    : I extends 9 ? [any, any, any, any, any, any, any, any, any, A, ...any[]]
    : any[];
export type OnlyResult<A, R, I extends number> = (...args: Args<I, A>) => R;

/**
 * wrap function with one argument to function with many arguments
 * pass selected argument to given function
 * @param argIndex selected argument index
 * @param fn function for wrap
 * @returns wraped function
 *
 * @example
 * const func = (a) => {
 *    return a;
 * }
 * only(1, func)(1, 2); // => 2
 * only(3, func)(1, 2); // => undefined
 */
function only<A, R, I extends number>(argIndex: I, fn: (arg: A) => R): OnlyResult<A, R, I> {
    return function() {
        return fn(arguments[argIndex]);
    };
}

export default curry(only) as {
    <A, R, I extends number>(argIndex: I, fn: (arg: A) => R): OnlyResult<A, R, I>;
    <A, R, I extends number>(argIndex: I): (fn: (arg: A) => R) => OnlyResult<A, R, I>;
};

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('pass only one argument', t => {
        const testFn = (...args: any[]) => args.length;
        t.is(1, only(0, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(1, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(2, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(3, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(4, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(5, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(6, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(7, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(8, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
        t.is(1, only(9, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));
    });
    test('pass selected argument', t => {
        const testObj = {};
        const testFn = (v: typeof testObj) => v;
        t.is(testObj, only(1, testFn)(0, testObj));
        t.is(testObj, only(2, testFn)(0, 1, testObj));
        t.is(testObj, only(3, testFn)(0, 1, 2, testObj));
        t.is(testObj, only(4, testFn)(0, 1, 2, 3, testObj));
        t.is(testObj, only(5, testFn)(0, 1, 2, 3, 4, testObj));
        t.is(testObj, only(6, testFn)(0, 1, 2, 3, 4, 5, testObj));
        t.is(testObj, only(7, testFn)(0, 1, 2, 3, 4, 5, 6, testObj));
        t.is(testObj, only(8, testFn)(0, 1, 2, 3, 4, 5, 6, 7, testObj));
        t.is(testObj, only(9, testFn)(0, 1, 2, 3, 4, 5, 6, 7, 8, testObj));
    });
})();
// </test>
