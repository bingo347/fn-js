import curry from './curry';
import only from './only';

function mapReduce(mapper, reducer) {
    const normalizedMapper = only(0, mapper);
    return (...args) => reducer(...args.map(normalizedMapper));
}

export default curry(mapReduce);
