/* global setTimeout */

/**
 * @name delay
 * @param {number} timeout
 * @returns {(argForChain: any) => Promise}
 */
function delay(timeout) {
    return argForChain => new Promise(resolve => setTimeout(resolve, timeout, argForChain));
}

export default delay;
