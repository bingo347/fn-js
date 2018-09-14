import typeFilter from './typeFilter';
import isString from '../predicates/isString';
import normalizePredicate from '../normalizePredicate';
import only0 from '../only0';

function arrayOfFilter(elementsPredicate) {
    const normalizedPredicate = (isString(elementsPredicate)
        ? typeFilter(elementsPredicate)
        : normalizePredicate(elementsPredicate)
    );
    return arr => Array.isArray(arr) && arr.every(only0(normalizedPredicate));
}

export default arrayOfFilter;
