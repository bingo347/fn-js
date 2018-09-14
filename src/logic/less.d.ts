import {Predicate} from '../_global';

declare function less(a: number | string, b: number | string): boolean;
declare function less(a: number | string): Predicate<number | string>;

export default less;
