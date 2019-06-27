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
type OnlyResult<A, R, I extends number> = (...args: Args<I, A>) => R;

function only<A, R, I extends number>(argIndex: I): (fn: (arg: A) => R) => OnlyResult<A, R, I>;
function only<A, R, I extends number>(argIndex: I, fn: (arg: A) => R): OnlyResult<A, R, I>;
function only<A, R, I extends number>(argIndex: I, fn?: (arg: A) => R) {
    if(typeof fn === 'undefined') {
        return function(fn: (arg: A) => R): OnlyResult<A, R, I> {
            return only(argIndex, fn);
        };
    }
    return function() {
        return fn(arguments[argIndex]);
    };
}

export default only;
