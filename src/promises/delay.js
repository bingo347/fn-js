/* global setTimeout */

function delay(timeout) {
    return argForChain => new Promise(resolve => setTimeout(resolve, timeout, argForChain));
}

export default delay;
