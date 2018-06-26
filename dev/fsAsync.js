import fs from 'fs';
import {promisify} from 'util';

export default [
    'readdir',
    'stat',
    'readFile',
    'writeFile'
].reduce((acc, key) => {
    acc[key] = promisify(fs[key]);
    return acc;
}, {});
