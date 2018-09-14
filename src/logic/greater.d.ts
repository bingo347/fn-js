import {Predicate} from '../_global';

declare function greater(a: number | string, b: number | string): boolean;
declare function greater(a: number | string): Predicate<number | string>;

export default greater;
