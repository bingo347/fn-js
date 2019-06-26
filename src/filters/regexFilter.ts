import {Predicate} from '../types';

/**
 * Transform regular expression to Predicate
 * @param regex a regular expression
 * @returns string Predicate
 *
 * @example
 * const isStartWithThe = regexFilter(/^The/);
 * isStartWithThe('A regular expression is a pattern'); // => false
 * isStartWithThe('The end'); // => true
 */
function regexFilter(regex: RegExp): Predicate<string> {
    return str => regex.test(str);
}

export default regexFilter;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const hasTest = regexFilter(/test/);
    test('result is Predicate', t => {
        t.is('function', typeof hasTest);
        t.is('boolean', typeof hasTest());
    });
    test('is correct Predicate', t => {
        t.assert(hasTest('test'));
        t.false(hasTest());
        t.false(hasTest(''));
        t.false(hasTest('FAIL'));
    });
})();
// </test>
