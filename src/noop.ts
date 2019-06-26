const noop = () => {};
export default noop;

/** @test */
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test.todo('noop');
})();
