import {Predicate} from '../_global';

declare function arrayOfFilter<V = any>(elementsPredicate: Predicate<V>): Predicate<V[]>;
declare function arrayOfFilter(elementsPredicate: string): Predicate<any[]>;

export default arrayOfFilter;
