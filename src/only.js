import curry from './curry';

/**
 * @name only
 * @param {number} argIndex
 * @param {(...args: *) => *} fn
 * @returns {(argByIndex: *) => *}
 */
function only(argIndex, fn) {
    return (...args) => fn(args[argIndex]);
}

export default curry(only);
