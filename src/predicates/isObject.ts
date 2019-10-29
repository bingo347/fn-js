import typeFilter from '../filters/typeFilter';

/**
 * check given value is object
 * @param value value for check
 * @returns true if the given value is object
 *
 * @example
 * isObject({}); // => true
 * isObject([]); // => true
 * isObject(123); // => false
 * isObject(() => {}); // => false
 */
const isObject = typeFilter('object');

export default isObject;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(isObject({}));
        t.true(isObject([]));
        t.false(isObject(123));
        t.false(isObject(() => {}));
    });
})();
// </test>
