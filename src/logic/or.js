import normalizePredicate from '../normalizePredicate';

/**
 * @name or
 * @param  {...Array.<(...args: *[]) => boolean>} predicates
 * @returns {(...args: *[]) => boolean}
 */
function or(...predicates) {
    const normalizedPredicates = predicates.map(normalizePredicate);
    return (...args) => normalizedPredicates.some(predicate => !!predicate(...args));
}

export default or;
