interface Placeholder {ph: 1; }

/**
 * It's placeholder for skip arguments in curried functions
 */
const _: Placeholder = {ph: 1};

export default _;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('placeholder is Placeholder', t => {
        t.assert(_ && _.ph === 1);
    });
})();
// </test>
