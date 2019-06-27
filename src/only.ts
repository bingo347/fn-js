import curry, {CurriedFunction2} from './curry';

type T0<A> = [A, ...any[]];
type T1<A> = [any, A, ...any[]];
type T2<A> = [any, any, A, ...any[]];
type T3<A> = [any, any, any, A, ...any[]];
type T4<A> = [any, any, any, any, A, ...any[]];
type T5<A> = [any, any, any, any, any, A, ...any[]];
type T6<A> = [any, any, any, any, any, any, A, ...any[]];
type T7<A> = [any, any, any, any, any, any, any, A, ...any[]];
type T8<A> = [any, any, any, any, any, any, any, any, A, ...any[]];
type T9<A> = [any, any, any, any, any, any, any, any, any, A, ...any[]];
type Args<I, A>
    = I extends 0 ? T0<A>
    : I extends 1 ? T1<A>
    : I extends 2 ? T2<A>
    : I extends 3 ? T3<A>
    : I extends 4 ? T4<A>
    : I extends 5 ? T5<A>
    : I extends 6 ? T6<A>
    : I extends 7 ? T7<A>
    : I extends 8 ? T8<A>
    : I extends 9 ? T9<A>
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
