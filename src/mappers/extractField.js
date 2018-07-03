import isNil from '../predicates/isNil';
import curry from '../fn/curry';

function extractField(field, obj) {
    return isNil(obj) ? void 0 : obj[field];
}

export default curry(extractField);
