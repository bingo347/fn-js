import path from 'path';
import childProcess from 'child_process';
import {promisify} from 'util';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {SRC_PATH, DIST_PATH} from './helpers/paths';

const exec = promisify(childProcess.exec);
const _babel = path.join(__dirname, '_babel.js');
const REQUIRE_RE = /require\('(.*)'\);/mg;

findInDirectory(
    SRC_PATH,
    filePath => filePath.endsWith('.js') && !filePath.endsWith('.test.js')
).then(moduleFiles => {
    return Promise.all(moduleFiles.map(buildModule));
}).catch(console.error);

async function buildModule(srcModule) {
    const distModule = srcModule.replace(SRC_PATH, DIST_PATH);
    const {stdout} = await exec(`cat ${srcModule} | node ${_babel}`);
    await exec('mkdir -p ' + path.dirname(distModule));
    await fsA.writeFile(distModule, String(stdout).replace(REQUIRE_RE, 'require(\'$1.js\');'));
}
