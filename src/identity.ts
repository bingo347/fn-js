/**
 * it returns given argument
 * @param value value for identity
 * @returns given argument
 *
 * @example
 * identity(1); // => 1
 * identity('hello'); // => 'hello'
 * identity(true); // => true
 */
function identity<T>(value: T): T {
    return value;
}

export default identity;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testObj = {};
    test('returns given argument', t => {
        t.true(identity(true));
        t.false(identity(false));
        t.is('SOME STRING', identity('SOME STRING'));
        t.is(0, identity(0));
        t.is(1, identity(1));
        t.is(0.1, identity(0.1));
        t.is(testObj, identity(testObj));
    });
})();
// </test>
