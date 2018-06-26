import path from 'path';
import childProcess from 'child_process';
import {promisify} from 'util';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {DIST_PATH} from './helpers/paths';

const exec = promisify(childProcess.exec);
const _babel = path.join(__dirname, '_babel.js');
const REQUIRE_RE = /require\('(.*)\.mjs'\);/mg;
const JS_FILE_RE = /\.m?js$/;

findInDirectory(DIST_PATH).then(files => {
    const dirs = {
        '/': new Set()
    };
    for(const file of files) {
        const dir = path.dirname(file).replace(DIST_PATH, '');
        const base = path.basename(file).replace(JS_FILE_RE, '');
        if(!dirs[dir]) {
            dirs[dir] = new Set();
        }
        dirs[dir].add(base);
    }
    const dirsNames = Object.getOwnPropertyNames(dirs);
    for(const dir of dirsNames) {
        const files = Array.from(dirs[dir]);
        const subDirs = Array.from(new Set(dirsNames
            .filter(d => d !== dir && d.startsWith(dir))
            .map(d => d.replace(dir, '').split('/')[dir === '/' ? 0 : 1])
        ));
        dirs[dir] = {files, subDirs};
    }
    return Promise.all(dirsNames.map(dir => makeIndex(dirs[dir], dir)));
}).catch(console.error);

async function makeIndex({files, subDirs}, dir) {
    const dirsPreImports = subDirs.map(subDir => {
        return {
            imp: `import * as __${subDir} from './${subDir}/index.mjs';`,
            exp: `export const ${subDir} = __${subDir};`
        };
    });
    const filePreImports = files.map(file => {
        return {
            imp: `import __${file} from './${file}.mjs';`,
            exp: `export const ${file} = __${file};`
        };
    });
    const dirsImports = dirsPreImports.map(({imp}) => imp).join('\r\n');
    const dirsExports = dirsPreImports.map(({exp}) => exp).join('\r\n');
    const fileImports = filePreImports.map(({imp}) => imp).join('\r\n');
    const fileExports = filePreImports.map(({exp}) => exp).join('\r\n');
    const source = [dirsImports, fileImports, dirsExports, fileExports].filter(code => !!code).join('\r\n\r\n');
    const indexFile = path.join(DIST_PATH, dir.slice(1), 'index.mjs');
    await fsA.writeFile(indexFile, source);
    const {stdout} = await exec(`cat ${indexFile} | node ${_babel}`);
    await fsA.writeFile(indexFile.replace('/index.mjs', '/index.js'), String(stdout).replace(REQUIRE_RE, 'require(\'$1.js\');'));
}
