type Length<T extends any[]> = T['length'];
type ThisArg<F extends (...args: any[]) => any> = F extends (this: infer T, ...args: any[]) => any ? T : any;
type Arity<A extends number>
    = A extends 0 ? 0
    : A extends 1 ? 1
    : A extends 2 ? 2
    : A extends 3 ? 3
    : A extends 4 ? 4
    : A extends 5 ? 5
    : A extends 6 ? 6
    : A extends 7 ? 7
    : A extends 8 ? 8
    : A extends 9 ? 9
    : 'other';
type Head<Args extends any[], Count extends number> = {
    0: [];
    1: [Args[0]];
    2: [Args[0], Args[1]];
    3: [Args[0], Args[1], Args[2]];
    4: [Args[0], Args[1], Args[2], Args[3]];
    5: [Args[0], Args[1], Args[2], Args[3], Args[4]];
    6: [Args[0], Args[1], Args[2], Args[3], Args[4], Args[5]];
    7: [Args[0], Args[1], Args[2], Args[3], Args[4], Args[5], Args[6]];
    8: [Args[0], Args[1], Args[2], Args[3], Args[4], Args[5], Args[6], Args[7]];
    9: [Args[0], Args[1], Args[2], Args[3], Args[4], Args[5], Args[6], Args[7], Args[8]];
    other: any[];
}[Arity<Count>];
type Tail<Args extends any[], Skip extends number> = {
    0: [];
    1: ((...args: Args) => void) extends (a0: any, ...args: infer NextArgs) => void ? NextArgs : [];
    2: ((...args: Args) => void) extends (a0: any, a1: any, ...args: infer NextArgs) => void ? NextArgs : [];
    3: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, ...args: infer NextArgs) => void ? NextArgs : [];
    4: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, a3: any, ...args: infer NextArgs) => void ? NextArgs : [];
    5: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, a3: any, a4: any, ...args: infer NextArgs) => void ? NextArgs : [];
    6: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, ...args: infer NextArgs) => void ? NextArgs : [];
    7: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, ...args: infer NextArgs) => void ? NextArgs : [];
    8: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, ...args: infer NextArgs) => void ? NextArgs : [];
    9: ((...args: Args) => void) extends (a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, ...args: infer NextArgs) => void ? NextArgs : [];
    other: any[];
}[Arity<Skip>];
type Curry<F extends (...args: any[]) => any, A extends number, This> = {
    0: ReturnType<F>;
    1: (this: This, arg: Parameters<F>[0]) => ReturnType<F>;
    2: {
        (this: This, ...args: Head<Parameters<F>, 2>): ReturnType<F>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 1, This>;
    };
    3: {
        (this: This, ...args: Head<Parameters<F>, 3>): ReturnType<F>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 2, This>;
    };
    4: {
        (this: This, ...args: Head<Parameters<F>, 4>): ReturnType<F>;
        (...args: Head<Parameters<F>, 3>): Curry<(...args: Tail<Parameters<F>, 3>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 2, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 3, This>;
    };
    5: {
        (this: This, ...args: Head<Parameters<F>, 5>): ReturnType<F>;
        (...args: Head<Parameters<F>, 4>): Curry<(...args: Tail<Parameters<F>, 4>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 3>): Curry<(...args: Tail<Parameters<F>, 3>) => ReturnType<F>, 2, This>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 3, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 4, This>;
    };
    6: {
        (this: This, ...args: Head<Parameters<F>, 6>): ReturnType<F>;
        (...args: Head<Parameters<F>, 5>): Curry<(...args: Tail<Parameters<F>, 5>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 4>): Curry<(...args: Tail<Parameters<F>, 4>) => ReturnType<F>, 2, This>;
        (...args: Head<Parameters<F>, 3>): Curry<(...args: Tail<Parameters<F>, 3>) => ReturnType<F>, 3, This>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 4, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 5, This>;
    };
    7: {
        (this: This, ...args: Head<Parameters<F>, 7>): ReturnType<F>;
        (...args: Head<Parameters<F>, 6>): Curry<(...args: Tail<Parameters<F>, 6>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 5>): Curry<(...args: Tail<Parameters<F>, 5>) => ReturnType<F>, 2, This>;
        (...args: Head<Parameters<F>, 4>): Curry<(...args: Tail<Parameters<F>, 4>) => ReturnType<F>, 3, This>;
        (...args: Head<Parameters<F>, 3>): Curry<(...args: Tail<Parameters<F>, 3>) => ReturnType<F>, 4, This>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 5, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 6, This>;
    };
    8: {
        (this: This, ...args: Head<Parameters<F>, 8>): ReturnType<F>;
        (...args: Head<Parameters<F>, 7>): Curry<(...args: Tail<Parameters<F>, 7>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 6>): Curry<(...args: Tail<Parameters<F>, 6>) => ReturnType<F>, 2, This>;
        (...args: Head<Parameters<F>, 5>): Curry<(...args: Tail<Parameters<F>, 5>) => ReturnType<F>, 3, This>;
        (...args: Head<Parameters<F>, 4>): Curry<(...args: Tail<Parameters<F>, 4>) => ReturnType<F>, 4, This>;
        (...args: Head<Parameters<F>, 3>): Curry<(...args: Tail<Parameters<F>, 3>) => ReturnType<F>, 5, This>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 6, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 7, This>;
    };
    9: {
        (this: This, ...args: Head<Parameters<F>, 9>): ReturnType<F>;
        (...args: Head<Parameters<F>, 8>): Curry<(...args: Tail<Parameters<F>, 8>) => ReturnType<F>, 1, This>;
        (...args: Head<Parameters<F>, 7>): Curry<(...args: Tail<Parameters<F>, 7>) => ReturnType<F>, 2, This>;
        (...args: Head<Parameters<F>, 6>): Curry<(...args: Tail<Parameters<F>, 6>) => ReturnType<F>, 3, This>;
        (...args: Head<Parameters<F>, 5>): Curry<(...args: Tail<Parameters<F>, 5>) => ReturnType<F>, 4, This>;
        (...args: Head<Parameters<F>, 4>): Curry<(...args: Tail<Parameters<F>, 4>) => ReturnType<F>, 5, This>;
        (...args: Head<Parameters<F>, 3>): Curry<(...args: Tail<Parameters<F>, 3>) => ReturnType<F>, 6, This>;
        (...args: Head<Parameters<F>, 2>): Curry<(...args: Tail<Parameters<F>, 2>) => ReturnType<F>, 7, This>;
        (...args: Head<Parameters<F>, 1>): Curry<(...args: Tail<Parameters<F>, 1>) => ReturnType<F>, 8, This>;
    };
    other: (...args: any[]) => any;
}[Arity<A>] & {
    length: Arity<A>;
    name: string
};

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
function curry<
    F extends (...args: any[]) => any,
    Arity extends number = Length<Parameters<F>>,
    This = ThisArg<F>
>(fn: F, arity: Arity = fn.length as Arity): Curry<F, Arity, This> {
    return curryNext(fn, [], arity);
}

export default curry;

function curryNext<F extends (...args: any[]) => any, Arity extends number, This>(
    original: F,
    prevArgs: any[],
    argsCount: Arity
): Curry<F, Arity, This> {
    if(argsCount <= 0) {
        return original.apply(this, prevArgs);
    }
    function fn(...args: any[]) {
        return curryNext.call(this, original, prevArgs.concat(args), argsCount - args.length);
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
    return fn as Curry<F, Arity, This>;
}

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testAdd2 = curry((a: number, b: number) => a + b);
    const testAdd3 = curry((a: number, b: number, c: number) => a + b + c);
    const testContext = curry(function testName(this: typeof ctx, ...args: any[]) {
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
