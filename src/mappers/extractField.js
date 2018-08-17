import isNil from '../predicates/isNil';
import curry from '../curry';

/**
 * @name extractField
 * @param {string|Symbol} field
 * @param {Object.<string, *>} obj
 * @returns {*}
 */
function extractField(field, obj) {
    return isNil(obj) ? void 0 : obj[field];
}

export default curry(extractField);
