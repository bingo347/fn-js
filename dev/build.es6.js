import fs from 'fs';
import path from 'path';
import childProcess from 'child_process';
import {promisify} from 'util';

const SRC_PATH = path.join(__dirname, '../src');
const DIST_PATH = path.join(__dirname, '../dist');

const fsA = [
    'readdir',
    'stat'
].reduce((acc, key) => {
    acc[key] = promisify(fs[key]);
    return acc;
}, {});
const exec = promisify(childProcess.exec);

exec('rm -rf ' + DIST_PATH).then(() => {
    return exec('mkdir ' + DIST_PATH);
}).then(() => {
    return findModulesInDirectory(SRC_PATH);
}).then(moduleFiles => {
    console.log(moduleFiles);
}).catch(console.error);

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
