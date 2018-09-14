import {Predicate} from '../_global';

declare function arrayOfFilter<V>(elementsPredicate: Predicate<V>): (arr: V[]) => boolean;
declare function arrayOfFilter(elementsPredicate: string): (arr: any[]) => boolean;

export default arrayOfFilter;
