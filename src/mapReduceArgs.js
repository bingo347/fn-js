import curry from './curry';
import only from './only';

function mapReduceArgs(mapper, reducer) {
    const normalizedMapper = only(0, mapper);
    return (...args) => reducer(...args.map(normalizedMapper));
}

export default curry(mapReduceArgs);
