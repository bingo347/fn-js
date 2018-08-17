import curry from '../curry';

/**
 * @name equal
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
function equal(a, b) {
    return a === b;
}

export default curry(equal);
