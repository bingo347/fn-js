import {Predicate} from '../../_global';

declare function lt(a: number, b: number): boolean;
declare function lt(a: number): Predicate<number>;

export default lt;
