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

function only<A, R>(argIndex: 0, fn: (arg: A) => R): (...args: T0<A>) => R;
function only<A, R>(argIndex: 1, fn: (arg: A) => R): (...args: T1<A>) => R;
function only<A, R>(argIndex: 2, fn: (arg: A) => R): (...args: T2<A>) => R;
function only<A, R>(argIndex: 3, fn: (arg: A) => R): (...args: T3<A>) => R;
function only<A, R>(argIndex: 4, fn: (arg: A) => R): (...args: T4<A>) => R;
function only<A, R>(argIndex: 5, fn: (arg: A) => R): (...args: T5<A>) => R;
function only<A, R>(argIndex: 6, fn: (arg: A) => R): (...args: T6<A>) => R;
function only<A, R>(argIndex: 7, fn: (arg: A) => R): (...args: T7<A>) => R;
function only<A, R>(argIndex: 8, fn: (arg: A) => R): (...args: T8<A>) => R;
function only<A, R>(argIndex: 9, fn: (arg: A) => R): (...args: T9<A>) => R;
function only<R>(argIndex: number, fn: (arg: any) => R): (...args: any[]) => R {
    return function() {
        return fn(arguments[argIndex]);
    };
}

export default curry<number, <A, R>(arg: A) => R, typeof only>(only);
