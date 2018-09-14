import {Predicate} from '../../_global';

declare function eq(a: number, b: number): boolean;
declare function eq(a: number): Predicate<number>;

export default eq;
