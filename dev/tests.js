import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

const fsA = [
    'readdir',
    'stat'
].reduce((acc, key) => {
    acc[key] = promisify(fs[key]);
    return acc;
}, {});

findTestsInDirectory(path.join(__dirname, '../src')).then(filesForTest => {
    return filesForTest.map(filePath => require(filePath));
});

async function findTestsInDirectory(dirPath) {
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
        .map(({filePath}) => findTestsInDirectory(filePath))
    );
    return (filesInfo
        .filter(({filePath, isFile}) => isFile && filePath.endsWith('.test.js'))
        .map(({filePath}) => filePath)
        .concat(...subDirs)
    );
}
