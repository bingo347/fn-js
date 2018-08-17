import assert from 'assert';
import makeIterator from './iterator';

const PREFIX = 'make/iterator';

const testMap = makeIterator().map(el => el * 2).release();
const testFilter = makeIterator().filter(el => el % 2).release();
const testTake = makeIterator().take(3).release();
const testMapFilter = makeIterator().map(el => el + 1).filter(el => el % 2).release();

assert.strictEqual('function', typeof makeIterator, `${PREFIX}: is not function`);

assert.strictEqual('function', typeof testMap, `${PREFIX}: map is not function`);
assert.strictEqual('function', typeof testFilter, `${PREFIX}: filter is not function`);
assert.strictEqual('function', typeof testTake, `${PREFIX}: take is not function`);
assert.strictEqual('function', typeof testMapFilter, `${PREFIX}: map-filter is not function`);

assert.deepStrictEqual([2, 4, 6, 8, 10], testMap([1, 2, 3, 4, 5]), `${PREFIX}: map is not correct`);
assert.deepStrictEqual([1, 3, 5], testFilter([1, 2, 3, 4, 5]), `${PREFIX}: filter is not correct`);
assert.deepStrictEqual([1, 2, 3], testTake([1, 2, 3, 4, 5]), `${PREFIX}: take is not correct`);
assert.deepStrictEqual([3, 5], testMapFilter([1, 2, 3, 4, 5]), `${PREFIX}: map-filter is not correct`);
