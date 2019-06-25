const noop = () => {};
export default noop;

import test from 'ava';
/** @test */
(function() {
    if(module.parent.id !== '.') { return; }
    test('noop', t => {
        t.timeout(1);
        t.is(void 0, noop());
    });
})();
