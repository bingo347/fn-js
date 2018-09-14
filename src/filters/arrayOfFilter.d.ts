import {ValuePredicatable} from '../_global';

declare function arrayOfFilter<V>(elementsPredicate: ValuePredicatable<V>): (arr: V[]) => boolean;
declare function arrayOfFilter(elementsPredicate: string): (arr: any[]) => boolean;

export default arrayOfFilter;
