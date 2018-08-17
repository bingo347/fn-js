import normalizePredicate from '../normalizePredicate';

/**
 * @name not
 * @param  {(...args: *[]) => boolean} predicate
 * @returns {(...args: *[]) => boolean}
 */
function not(predicate) {
    const normalizedPredicate = normalizePredicate(predicate);
    return (...args) => !normalizedPredicate(...args);
}

export default not;
