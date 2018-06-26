import path from 'path';
import fsA from './fsAsync';
import T from '../../src/fn/T';
import makeIterator from '../../src/fn/makeIterator';

async function findInDirectory(dirPath, filePathFilter = T) {
    const filesIterator = makeIterator()
        .filter(({filePath, isFile}) => isFile && filePathFilter(filePath))
        .map(({filePath}) => filePath)
        .release();
    const subDirsIterator = makeIterator()
        .filter(({isDir}) => isDir)
        .map(({filePath}) => findInDirectoryInternal(filePath, filesIterator, subDirsIterator))
        .release();
    return findInDirectoryInternal(dirPath, filesIterator, subDirsIterator);
}

async function findInDirectoryInternal(dirPath, filesIterator, subDirsIterator) {
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
    const subDirs = await Promise.all(subDirsIterator(filesInfo));
    return filesIterator(filesInfo).concat(...subDirs);
}

export default findInDirectory;
