import assert from 'assert';
import curry from './curry';

const PREFIX = 'fn/curry';


const testAdd2 = curry((a, b) => a + b);
const testAdd3 = curry((a, b, c) => a + b + c);
const testContext = curry(function testName() {
    return this;
}, 3);
const ctx = {};

assert.strictEqual('function', typeof curry, `${PREFIX}: is not function`);

assert.strictEqual('function', typeof testAdd2, `${PREFIX}: result is not function`);
assert.strictEqual('function', typeof testAdd2(2), `${PREFIX}: curried is not function`);

assert.strictEqual(5, testAdd2(2, 3),  `${PREFIX}: normal call support`);
assert.strictEqual(5, testAdd2(2)(3),  `${PREFIX}: curried call support`);

assert.strictEqual(9, testAdd3(2, 3, 4),  `${PREFIX}: normal call support`);
assert.strictEqual(9, testAdd3(2)(3)(4),  `${PREFIX}: curried call support`);
assert.strictEqual(9, testAdd3(2, 3)(4),  `${PREFIX}: partial curried call support`);
assert.strictEqual(9, testAdd3(2)(3, 4),  `${PREFIX}: partial curried call support`);

assert.strictEqual(2, testAdd2.length,  `${PREFIX}: properly reports the length of the curried function`);
assert.strictEqual(1, testAdd2(0).length,  `${PREFIX}: properly reports the length of the curried function`);
assert.strictEqual(3, testAdd3.length,  `${PREFIX}: properly reports the length of the curried function`);
assert.strictEqual(2, testAdd3(0).length,  `${PREFIX}: properly reports the length of the curried function`);
assert.strictEqual(1, testAdd3(0)(0).length,  `${PREFIX}: properly reports the length of the curried function`);
assert.strictEqual(1, testAdd3(0, 0).length,  `${PREFIX}: properly reports the length of the curried function`);
assert.strictEqual(3, testContext.length,  `${PREFIX}: properly reports the length of the curried function`);

assert.strictEqual('testName', testContext.name, `${PREFIX}: properly reports the name of the curried function`);
assert.strictEqual('testName', testContext(0).name, `${PREFIX}: properly reports the name of the curried function`);
assert.strictEqual('testName', testContext(0)(0).name, `${PREFIX}: properly reports the name of the curried function`);

assert.strictEqual(ctx, testContext.call(ctx, 0, 0, 0), `${PREFIX}: preserves context`);
assert.strictEqual(ctx, testContext(0).call(ctx, 0, 0), `${PREFIX}: preserves context`);
assert.strictEqual(ctx, testContext(0)(0).call(ctx, 0), `${PREFIX}: preserves context`);
assert.strictEqual(ctx, testContext(0, 0).call(ctx, 0), `${PREFIX}: preserves context`);
