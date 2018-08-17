import curry from '../curry';

/**
 * @name less
 * @param {number|string} a
 * @param {number|string} b
 * @returns {boolean}
 */
function less(a, b) {
    return a < b;
}

export default curry(less);
