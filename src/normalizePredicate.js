import always from './always';
import isFunction from './predicates/isFunction';

function normalizePredicate(predicate) {
    return (isFunction(predicate)
        ? predicate
        : always(!!predicate)
    );
}

export default normalizePredicate;
