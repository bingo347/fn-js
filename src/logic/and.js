import normalizePredicate from '../fn/normalizePredicate';

function and(...predicates) {
    const normalizedPredicates = predicates.map(normalizePredicate);
    return (...args) => normalizedPredicates.every(predicate => !!predicate(...args));
}

export default and;
