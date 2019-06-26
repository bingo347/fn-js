/**
 * wrap value in function which will always return the given argument
 * @param value value for wrap
 * @returns function which will always return the given argument
 *
 * @example
 * always(1)(); // => 1
 *
 * const f = always([1, 2, 3, 4]);
 * f(); // => [1, 2, 3, 4]
 * f(); // => [1, 2, 3, 4]
 * f() === f(); // => true
 */
function always<T>(value: T): () => T {
    return () => value;
}

export default always;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    const testObj = {};
    test('returns function which will always return given argument', t => {
        t.true(always(true)());
        t.false(always(false)());
        t.is('SOME STRING', always('SOME STRING')());
        t.is(0, always(0)());
        t.is(1, always(1)());
        t.is(0.1, always(0.1)());
        t.is(testObj, always(testObj)());
    });
})();
// </test>
