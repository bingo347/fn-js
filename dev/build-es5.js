import path from 'path';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {SRC_PATH, DIST_PATH} from './helpers/paths';
import babelize from './helpers/babel';
import exec from './helpers/exec';

const REQUIRE_RE = /require\('(.*)'\);/mg;

findInDirectory(
    SRC_PATH,
    filePath => filePath.endsWith('.js') && !filePath.endsWith('.test.js')
).then(moduleFiles => {
    return Promise.all(moduleFiles.map(buildModule));
}).catch(console.error);

async function buildModule(srcModule) {
    const distModule = srcModule.replace(SRC_PATH, DIST_PATH);
    const code = await babelize(srcModule);
    await exec('mkdir -p ' + path.dirname(distModule));
    await fsA.writeFile(distModule, code.replace(REQUIRE_RE, 'require(\'$1.js\');'));
}
