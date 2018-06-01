function curryNext(original, prevArgs, argsCount) {
    if(argsCount <= 0) {
        return original.apply(this, prevArgs);
    }
    function fn(...args) {
        return curryNext.call(this, original, prevArgs.concat(args), argsCount - args.length);
    }
    Object.defineProperties(fn, {
        length: {
            configurable: true,
            value: argsCount
        },
        name: {
            configurable: true,
            value: original.name
        }
    });
    return fn;
}

function curry(fn, argsCount = fn.length) {
    return curryNext(fn, [], argsCount);
}

export default curry;
