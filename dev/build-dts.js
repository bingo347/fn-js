import path from 'path';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {SRC_PATH, DIST_PATH} from './helpers/paths';
import exec from './helpers/exec';

findInDirectory(
    SRC_PATH,
    filePath => filePath.endsWith('.d.ts')
).then(moduleFiles => {
    return Promise.all(moduleFiles.map(buildModule));
}).catch(console.error);

async function buildModule(srcModule) {
    const distModule = srcModule.replace(SRC_PATH, DIST_PATH);
    const source = await fsA.readFile(srcModule, 'utf-8');
    await exec('mkdir -p ' + path.dirname(distModule));
    await fsA.writeFile(distModule, source);
}
