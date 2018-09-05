import isNil from '../predicates/isNil';
import curry from '../curry';
import noop from '../noop';

function extractMethod(method, obj) {
    return isNil(obj) ? noop : (...args) => obj[method](...args);
}

export default curry(extractMethod);
