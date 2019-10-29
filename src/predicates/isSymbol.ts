import typeFilter from '../filters/typeFilter';

/**
 * check given value is symbol
 * @param value value for check
 * @returns true if the given value is symbol
 *
 * @example
 * isSymbol(Symbol()); // => true
 * isSymbol(''); // => false
 */
const isSymbol = typeFilter('symbol');

export default isSymbol;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(isSymbol(Symbol()));
        t.false(isSymbol(''));
    });
})();
// </test>
