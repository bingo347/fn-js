import carry from './carry';

function only(argIndex, fn) {
    return (...args) => fn(args[argIndex]);
}

export default carry(only);
