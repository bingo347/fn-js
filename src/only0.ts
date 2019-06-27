import only, {OnlyResult} from './only';

const only0: <A, R>(fn: (arg: A) => R) => OnlyResult<A, R, 0> = only(0);

export default only0;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('pass 0 argument', t => {
        const testObj = {};
        t.is(testObj, only0((v: typeof testObj) => v)(testObj, 0, 1, 2));
    });
})();
// </test>
