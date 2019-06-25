const noop = () => {};
export default noop;

import test from 'ava';
/** @test */
test('noop', t => {
    t.timeout(1);
    t.is(void 0, noop());
});
