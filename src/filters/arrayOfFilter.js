import typeFilter from './typeFilter';
import isString from '../predicates/isString';
import normalizePredicate from '../normalizePredicate';

/**
 * @name arrayOfFilter
 * @param {(value: *) => boolean} elementsPredicate
 * @returns {(value: *) => boolean}
 */
function arrayOfFilter(elementsPredicate) {
    const normalizedPredicate = (isString(elementsPredicate)
        ? typeFilter(elementsPredicate)
        : normalizePredicate(elementsPredicate)
    );
    return arr => Array.isArray(arr) && arr.every(normalizedPredicate);
}

export default arrayOfFilter;
