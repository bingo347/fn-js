import normalizePredicate from '../normalizePredicate';

function or(...predicates) {
    const normalizedPredicates = predicates.map(normalizePredicate);
    return (...args) => normalizedPredicates.some(predicate => !!predicate(...args));
}

export default or;
