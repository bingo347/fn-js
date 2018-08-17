import curry from '../curry';

/**
 * @name greater
 * @param {number|string} a
 * @param {number|string} b
 * @returns {boolean}
 */
function greater(a, b) {
    return a > b;
}

export default curry(greater);
