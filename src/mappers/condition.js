import curry from '../curry';
import advance from '../advance';
import normalizePredicate from '../normalizePredicate';

function condition(predicate, trueMapper, falseMapper = advance) {
    const normalizedPredicate = normalizePredicate(predicate);
    return (...args) => (normalizedPredicate(...args)
        ? trueMapper(...args)
        : falseMapper(...args)
    );
}

export default curry(condition);
