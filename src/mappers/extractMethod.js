import isNil from '../predicates/isNil';
import curry from '../curry';
import noop from '../noop';

/**
 * @name extractMethod
 * @param {string|Symbol} method
 * @param {Object.<string, Function>} obj
 * @returns {(...args: *) => *}
 */
function extractMethod(method, obj) {
    return isNil(obj) ? noop : (...args) => obj[method](...args);
}

export default curry(extractMethod);
