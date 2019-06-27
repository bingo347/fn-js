import curry, {CurriedFunction2} from './curry';

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

function only<A, R, I extends number>(argIndex: I, fn: (arg: A) => R): (...args: Args<I, A>) => R {
    return function() {
        return fn(arguments[argIndex]);
    };
}

const a = only(7, (x: string) => x);

/*
const $only = curry<number, <A, R>(arg: A) => R, ReturnType<typeof only>>(only);
export default $only;

const x = $only(0, ((x: string) => x) as <A, R>(arg: A) => R);
*/
