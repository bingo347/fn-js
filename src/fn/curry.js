import arrayAccumulator from '../helpers/arrayAccumulator';

function carryNext(accumulate, release, argsCount) {
    if(argsCount <= 0) {
        return release();
    }
    return (...args) => {
        if(args.length === 0) {
            return release();
        }
        accumulate(...args);
        return carryNext(accumulate, release, argsCount - args.length);
    };
}

function carry(fn, argsCount = fn.length) {
    const accumulate = arrayAccumulator();
    const release = () => fn(...accumulate.release());
    return carryNext(accumulate, release, argsCount);
}

export default carry;
