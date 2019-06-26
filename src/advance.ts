/**
 * it returns given argument
 * @param value value for advance
 * @returns given argument
 *
 * @example
 * advance(1); // => 1
 * advance('hello'); // => 'hello'
 * advance(true); // => true
 */
function advance<T>(value: T): T {
    return value;
}

export default advance;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testObj = {};
    test('returns given argument', t => {
        t.true(advance(true));
        t.false(advance(false));
        t.is('SOME STRING', advance('SOME STRING'));
        t.is(0, advance(0));
        t.is(1, advance(1));
        t.is(0.1, advance(0.1));
        t.is(testObj, advance(testObj));
    });
})();
// </test>
