import always from './always';
import {Predicate} from './types';

/**
 * it always true Predicate
 * @returns true
 *
 * @example
 * T(); // => true
 */
const T: Predicate<boolean> = always(true);

export default T;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('always true', t => {
        t.true(T());
    });
})();
// </test>
