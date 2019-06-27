import {Predicate} from '../types';
import curry from '../curry';

/**
 * compare two arguments
 * @curried
 * @param a
 * @param b
 * @returns is a equal b
 *
 * @example
 * equal(1, 1) // => true
 * equal(100, '100') // => false
 */
function equal<T1, T2>(a: T1, b: T2): boolean {
    return (a as any) === (b as any);
}

export default curry(equal);

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('is equal', t => {
        t.true(equal(1, 1));
        t.false(equal(100, '100'));
    });
})();
// </test>
