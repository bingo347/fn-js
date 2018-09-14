import {Predicate} from '../../_global';

declare function gt(a: number, b: number): boolean;
declare function gt(a: number): Predicate<number>;

export default gt;
