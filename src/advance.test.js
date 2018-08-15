import assert from 'assert';
import advance from './advance';

const PREFIX = 'advance';

const testObj = {};

assert.strictEqual('function', typeof advance, `${PREFIX}: is not function`);

assert.strictEqual(testObj, advance(testObj),  `${PREFIX}: normal call support`);
