import curry from './curry';
import only from './only';

/**
 * @name mapReduceArgs
 * @param {(arg: *) => *} mapper
 * @param {(...args: *) => *} reducer
 * @returns {(...args: *) => *}
 */
function mapReduceArgs(mapper, reducer) {
    const normalizedMapper = only(0, mapper);
    return (...args) => reducer(...args.map(normalizedMapper));
}

export default curry(mapReduceArgs);
