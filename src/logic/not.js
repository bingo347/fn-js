import normalizePredicate from '../normalizePredicate';

function not(predicate) {
    const normalizedPredicate = normalizePredicate(predicate);
    return (...args) => !normalizedPredicate(...args);
}

export default not;
