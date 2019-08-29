import always from './always';
import isFunction from './predicates/isFunction';
import {Predicate, Predicatable} from './types';

/**
 * Transform Predicatable to Predicate
 * @param predicate Predicatate or boolean
 * @returns Predicate
 *
 * @example
 * normalizePredicate(true) // => () => true
 * normalizePredicate(false) // => () => false
 * normalizePredicate(() => true) // => () => true
 * normalizePredicate(() => false) // => () => false
 */
function normalizePredicate<T = void>(predicate: Predicatable<T>): Predicate<[T]> {
    return (isFunction(predicate)
        ? predicate
        : always(!!predicate)
    );
}

export default normalizePredicate;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('Pass boolean', t => {
        t.true(normalizePredicate(true)());
        t.false(normalizePredicate(false)());
    });
    test('Pass predicate', t => {
        const predicate = () => true;
        t.is(predicate, normalizePredicate(predicate));
    });
})();
// </test>
