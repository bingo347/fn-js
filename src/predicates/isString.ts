import typeFilter from '../filters/typeFilter';

/**
 * check given value is string
 * @param value value for check
 * @returns true if the given value is string
 *
 * @example
 * isString(''); // => true
 * isString(123); // => false
 * isString(new String()); // => false
 */
const isString = typeFilter('string');

export default isString;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(isString(''));
        t.false(isString(123));
        // tslint:disable-next-line: no-construct
        t.false(isString(new String()));
    });
})();
// </test>
