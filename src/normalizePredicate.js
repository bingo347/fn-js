import always from './always';
import isFunction from './predicates/isFunction';

/**
 * @name normalizePredicate
 * @param {boolean|{() => boolean}} predicate
 * @returns {() => boolean}
 */
function normalizePredicate(predicate) {
    return (isFunction(predicate)
        ? predicate
        : always(!!predicate)
    );
}

export default normalizePredicate;
