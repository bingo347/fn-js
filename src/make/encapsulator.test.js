import assert from 'assert';
import makeEncapsulator from './encapsulator';

const PREFIX = 'make/encapsulator';

const sum = arr => arr.reduce((a, b) => a + b, 0);
const testEncapsulateApply = makeEncapsulator().encapsulate(1, 2, 3).applyTo((e0, e1, e2, ...args) => sum(args) / sum([e0, e1, e2]));
const testApplyEncapsulate = makeEncapsulator().applyTo((e0, e1, e2, ...args) => sum(args) / sum([e0, e1, e2])).encapsulate(1, 2, 3);
const testRightApply = makeEncapsulator().applyTo((a, e) => a - e, true);
const testLeftApply = makeEncapsulator().applyTo((e, a) => e - a);
const testReuseApply = makeEncapsulator().encapsulate(1, 2);

assert.strictEqual('function', typeof makeEncapsulator, `${PREFIX}: is not function`);

assert.strictEqual('function', typeof testEncapsulateApply, `${PREFIX}: result is not function`);
assert.strictEqual('function', typeof testApplyEncapsulate, `${PREFIX}: result is not function`);

assert.strictEqual(2, testEncapsulateApply(10, 2), `${PREFIX}: encapsulate -> applyTo`);
assert.strictEqual(2, testApplyEncapsulate(10, 2), `${PREFIX}: applyTo -> encapsulate`);
assert.strictEqual(1, testRightApply.encapsulate(3)(4), `${PREFIX}: right applyTo`);
assert.strictEqual(-1, testLeftApply.encapsulate(3)(4), `${PREFIX}: left applyTo`);

assert.strictEqual(2, testLeftApply.encapsulate(5)(3), `${PREFIX}: reuse applier`);
assert.strictEqual(6, testReuseApply.applyTo((...args) => sum(args))(3), `${PREFIX}: reuse encapsulator`);
