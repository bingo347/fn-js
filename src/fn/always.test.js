import assert from 'assert';
import always from './always';

const PREFIX = 'fn/always';

const testObj = {};
const testFN = always(testObj);

assert.strictEqual('function', typeof always, `${PREFIX}: is not function`);

assert.strictEqual(testObj, testFN(),  `${PREFIX}: normal call support`);
