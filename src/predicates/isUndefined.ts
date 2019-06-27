import typeFilter from '../filters/typeFilter';

/**
 * check given value is undefined
 * @param value value for check
 * @returns true if the given value is undefined
 *
 * @example
 * isUndefined(7); // => false
 * isUndefined(void 0); // => true
 *
 * let b;
 * isUndefined(b); // => true
 */
const isUndefined = typeFilter('undefined') as (value: any) => value is undefined;

export default isUndefined;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(isUndefined(void 0));
        t.false(isUndefined(null));
        t.false(isUndefined(0));
    });
})();
// </test>
