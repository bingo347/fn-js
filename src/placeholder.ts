export class Placeholder {}

export function isPlaceholder(v: unknown): v is Placeholder {
    return v instanceof Placeholder;
}

/**
 * It's placeholder for skip arguments in curried functions
 */
const placeholder: Placeholder = new Placeholder();

export default placeholder;

import test from 'ava';
/** @test */
(function() {
    if(module.parent.id !== '.') { return; }
    test('placeholder is Placeholder', t => {
        t.assert(isPlaceholder(placeholder));
    });
})();
