import path from 'path';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {DIST_PATH} from './helpers/paths';
import babelize from './helpers/babel';

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
        const files = Array.from(dirs[dir]).filter(f => !f.startsWith('_'));
        const subDirs = Array.from(new Set(dirsNames
            .filter(d => d !== '/' && d !== dir && d.startsWith(dir))
            .map(d => d.replace(dir, '').split('/')[dir === '/' ? 0 : 1])
        ));
        dirs[dir] = {files, subDirs};
    }
    return Promise.all(dirsNames.map(dir => makeIndex(dirs[dir], dir)));
}).catch(console.error);

async function makeIndex({files, subDirs}, dir) {
    const dirsPreImports = subDirs.map(subDir => {
        return {
            imp: `import * as ${subDir} from './${subDir}/index.mjs';`,
            exp: subDir
        };
    });
    const filePreImports = files.map(file => {
        return {
            imp: `import ${file} from './${file}.mjs';`,
            exp: file
        };
    });
    const dirsImports = dirsPreImports.map(({imp}) => imp).join('\r\n');
    const dirsExports = dirsPreImports.map(({exp}) => exp).join(',\r\n    ');
    const fileImports = filePreImports.map(({imp}) => imp).join('\r\n');
    const fileExports = filePreImports.map(({exp}) => exp).join(',\r\n    ');
    const allExports = `export {\r\n    ${dirsExports ? dirsExports + ',\r\n    ' : ''}${fileExports}\r\n};`;
    const source = [dirsImports, fileImports, allExports].filter(code => !!code).join('\r\n');
    const indexFile = path.join(DIST_PATH, dir.slice(1), 'index.mjs');
    await fsA.writeFile(indexFile, source);
    const code = await babelize(indexFile);
    await fsA.writeFile(
        indexFile.replace('/index.mjs', '/index.js'),
        code.replace(REQUIRE_RE, 'require(\'$1.js\');')
    );
}
