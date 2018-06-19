import normalizePredicate from '../fn/normalizePredicate';

function not(predicate) {
    const normalizedPredicate = normalizePredicate(predicate);
    return (...args) => !normalizedPredicate(...args);
}

export default not;
