import curry from './curry';

function only(argIndex, fn) {
    return (...args) => fn(args[argIndex]);
}

export default curry(only);
