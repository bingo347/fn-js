import normalizePredicate from '../normalizePredicate';

/**
 * @name and
 * @param  {...Array.<(...args: *[]) => boolean>} predicates
 * @returns {(...args: *[]) => boolean}
 */
function and(...predicates) {
    const normalizedPredicates = predicates.map(normalizePredicate);
    return (...args) => normalizedPredicates.every(predicate => !!predicate(...args));
}

export default and;
