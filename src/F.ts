import always from './always';
import {Predicate} from './types';

/**
 * it always false Predicate
 * @returns false
 *
 * @example
 * F(); // => false
 */
const F: Predicate<boolean> = always(false);

export default F;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('always false', t => {
        t.false(F());
    });
})();
// </test>
