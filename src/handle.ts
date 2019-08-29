import isFunction from './predicates/isFunction';

/**
 * Receives any number of functions as an argument, calls them with given value and returns it.
 * @param handlers functions
 * @return identity function with run handlers
 *
 * @example
 * const f = handle(a => console.log(a), a => console.log(a * 2));
 * f(5) // => 5 (log 5, log 10)
 * f(10) // => 10 (log 10, log 20)
 */
function handle<T>(...handlers: Array<(a: T) => void>): (a: T) => T {
    const filtredHandlers = handlers.filter(isFunction);
    return value => {
        filtredHandlers.forEach(handler => handler(value));
        return value;
    };
}

export default handle;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('returns given argument', t => {
        t.true(handle()(true));
        t.false(handle()(false));
    });
    test('side effect work', t => {
        const testObj = {
            v: false
        };
        const f = handle(() => testObj.v = true);
        t.false(testObj.v);
        t.true(f(true));
        t.true(testObj.v);
    });
})();
// </test>
