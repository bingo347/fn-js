import {ValuePredicatable, ValuePredicate} from '../_global';

declare function arrayOfFilter<V>(elementsPredicate: ValuePredicatable<V>): ValuePredicate<V[]>;
declare function arrayOfFilter(elementsPredicate: string): ValuePredicate<any[]>;

export default arrayOfFilter;
