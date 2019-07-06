import typeFilter from '../filters/typeFilter';

/**
 * check given value is number
 * @param value value for check
 * @returns true if the given value is number
 *
 * @example
 * isNumber(123); // => true
 * isNumber('123'); // => false
 * isNumber(new Number()); // => false
 */
const isNumber = typeFilter('number') as (value: any) => value is number;

export default isNumber;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(isNumber(123));
        t.false(isNumber('123'));
        // tslint:disable-next-line: no-construct
        t.false(isNumber(new Number()));
    });
})();
// </test>
