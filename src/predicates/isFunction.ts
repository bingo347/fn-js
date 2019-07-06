import typeFilter from '../filters/typeFilter';

/**
 * check given value is function
 * @param value value for check
 * @returns true if the given value is function
 *
 * @example
 * isFunction(isFunction); // => true
 * isFunction(() => {}); // => true
 * isFunction({}); // => false
 */
const isFunction = typeFilter('function') as (value: any) => value is (...args: any[]) => any;

export default isFunction;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(isFunction(isFunction));
        t.true(isFunction(() => {}));
        t.false(isFunction({}));
    });
})();
// </test>
