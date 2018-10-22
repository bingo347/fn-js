import isNil from '../predicates/isNil';
import isFunction from '../predicates/isFunction';
import curry from '../curry';
import noop from '../noop';

function extractMethod(method, obj) {
    return isNil(obj) || !isFunction(obj[method]) ? noop : (...args) => obj[method](...args);
}

export default curry(extractMethod);
