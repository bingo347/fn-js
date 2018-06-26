import path from 'path';
import childProcess from 'child_process';
import {promisify} from 'util';
import fsA from './fsAsync';
import findInDirectory from './findInDirectory';

const exec = promisify(childProcess.exec);

const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');
const IMPORT_RE = /import (.*) from '(.*)';/mg;

findInDirectory(
    SRC_PATH,
    filePath => filePath.endsWith('.js') && !filePath.endsWith('.test.js')
).then(moduleFiles => {
    return Promise.all(moduleFiles.map(buildModule));
}).catch(console.error);

async function buildModule(srcModule) {
    const distModule = srcModule.replace(SRC_PATH, DIST_PATH).slice(0, -3) + '.mjs';
    const source = await fsA.readFile(srcModule, 'utf-8');
    await exec('mkdir -p ' + path.dirname(distModule));
    await fsA.writeFile(distModule, source.replace(IMPORT_RE, 'import $1 from \'$2.mjs\';'));
}
