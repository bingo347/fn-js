import {Predicate} from '../_global';

declare function equal<T1 = any, T2 = any>(a: T1, b: T2): boolean;
declare function equal<T1 = any, T2 = any>(a: T1): Predicate<T2>;

export default equal;
