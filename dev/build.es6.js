import fs from 'fs';
import path from 'path';
import childProcess from 'child_process';
import {promisify} from 'util';

const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');
const IMPORT_RE = /import (.*) from '(.*)';/mg;

const fsA = [
    'readdir',
    'stat',
    'readFile',
    'writeFile'
].reduce((acc, key) => {
    acc[key] = promisify(fs[key]);
    return acc;
}, {});
const exec = promisify(childProcess.exec);

exec('rm -rf ' + DIST_PATH).then(() => {
    return findModulesInDirectory(SRC_PATH);
}).then(moduleFiles => {
    return Promise.all(moduleFiles.map(buildModule));
}).catch(console.error);

async function buildModule(srcModule) {
    const distModule = srcModule.replace(SRC_PATH, DIST_PATH).slice(0, -3) + '.mjs';
    const source = await fsA.readFile(srcModule, 'utf-8');
    await exec('mkdir -p ' + path.dirname(distModule));
    await fsA.writeFile(distModule, source.replace(IMPORT_RE, 'import $1 from \'$2.mjs\';'));
}

async function findModulesInDirectory(dirPath) {
    const files = await fsA.readdir(dirPath);
    const filesInfo = await Promise.all(files.map(async(filename) => {
        const filePath = path.join(dirPath, filename);
        const stats = await fsA.stat(filePath);
        return {
            filePath,
            isFile: stats.isFile(),
            isDir: stats.isDirectory()
        };
    }));
    const subDirs = await Promise.all(filesInfo
        .filter(({isDir}) => isDir)
        .map(({filePath}) => findModulesInDirectory(filePath))
    );
    return (filesInfo
        .filter(({filePath, isFile}) => isFile && filePath.endsWith('.js') && !filePath.endsWith('.test.js'))
        .map(({filePath}) => filePath)
        .concat(...subDirs)
    );
}
