import path from 'path';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {SRC_PATH, DIST_PATH} from './helpers/paths';
import exec from './helpers/exec';

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
