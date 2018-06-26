import path from 'path';
import childProcess from 'child_process';
import {promisify} from 'util';
import fsA from './fsAsync';
import findInDirectory from './findInDirectory';

const exec = promisify(childProcess.exec);

const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');
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
