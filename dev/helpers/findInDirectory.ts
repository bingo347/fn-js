import {promises as fs} from 'fs';
import * as path from 'path';

// TODO: use fn/T and fn/_typedef::Predicate
export type FilePathPredicate = (filePath: string) => boolean;
const T: FilePathPredicate = () => true;

// TODO: use fn/make/iterator
async function findInDirectory(
    dirPath: string,
    filePathFilter: FilePathPredicate = T
): Promise<string[]> {
    const dirents = await fs.readdir(dirPath, {withFileTypes: true});
    const files: string[] = [];
    const subDirs: Array<Promise<string[]>> = [];
    for(const dirent of dirents) {
        const filePath = path.join(dirPath, dirent.name);
        if(dirent.isDirectory()) {
            subDirs.push(findInDirectory(filePath, filePathFilter));
        } else if(dirent.isFile() && filePathFilter(filePath)) {
            files.push(filePath);
        }
    }
    return files.concat(...await Promise.all(subDirs));
}

export default findInDirectory;
