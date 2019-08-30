import curry from './curry';
import only0 from './only0';
import {Mapper} from './types';

/**
 * Map every argument by mapper and reduce all by reducer
 * @param mapper mapper function
 * @param reducer reducer function
 * @return function
 *
 * @example
 * const parseFloatAll = mapReduceArgs(a => parseFloat(a), (...args) => args);
 * parseFloatAll('1', '2', '3') // => [1, 2, 3]
 */
function mapReduceArgs<V, T, R>(
    mapper: Mapper<[V], T>,
    reducer: (...args: T[]) => R
): (...args: V[]) => R {
    const normalizedMapper = only0(mapper);
    return (...args) => reducer(...args.map(normalizedMapper));
}

export default curry(mapReduceArgs) as {
    <V, T, R>(mapper: Mapper<[V], T>, reducer: (...args: T[]) => R ): (...args: V[]) => R;
    <V, T, R>(mapper: Mapper<[V], T>): (reducer: (...args: T[]) => R ) => (...args: V[]) => R;
};

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('args mapping', t => {
        t.deepEqual([1, 2, 3], mapReduceArgs(
            (a: string) => parseFloat(a),
            (...args) => args
        )('1', '2', '3'));
    });
})();
// </test>
