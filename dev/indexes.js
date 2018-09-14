import path from 'path';
import fsA from './helpers/fsAsync';
import findInDirectory from './helpers/findInDirectory';
import {DIST_PATH} from './helpers/paths';
import babelize from './helpers/babel';
import advance from '../src/advance';
import T from '../src/T';
import F from '../src/F';

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
        const files = Array.from(dirs[dir]).filter(f => !f.startsWith('_') && !f.endsWith('.d.ts'));
        const subDirs = Array.from(new Set(dirsNames
            .filter(d => d !== '/' && d !== dir && d.startsWith(dir))
            .map(d => d.replace(dir, '').split('/')[dir === '/' ? 0 : 1])
        ));
        dirs[dir] = {files, subDirs};
    }
    return Promise.all(dirsNames.map(dir => Promise.all([
        makeIndex(dirs[dir], dir),
        makeIndexDTS(dirs[dir], dir)
    ])));
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
    const source = makeIndexSource(dirsPreImports, filePreImports);
    const indexFile = path.join(DIST_PATH, dir.slice(1), 'index.mjs');
    await fsA.writeFile(indexFile, source);
    const code = await babelize(indexFile);
    await fsA.writeFile(indexFile.replace('/index.mjs', '/index.js'), code);
}

async function makeIndexDTS({files, subDirs}, dir) {
    const dirsPreImports = subDirs.map(subDir => {
        return {
            imp: `import * as ${subDir} from './${subDir}/index';`,
            exp: subDir
        };
    });
    const filePreImports = await Promise.all(files.map(async(file) => {
        const isExists = await fsA.access(path.join(DIST_PATH, dir.slice(1), file + '.d.ts')).then(T).catch(F);
        return isExists ? {
            imp: `import ${file} from './${file}';`,
            exp: file
        } : null;
    }));
    const source = makeIndexSource(dirsPreImports, filePreImports.filter(advance));
    const indexFile = path.join(DIST_PATH, dir.slice(1), 'index.d.ts');
    await fsA.writeFile(indexFile, source);
}

function makeIndexSource(dirsPreImports, filePreImports) {
    const dirsImports = dirsPreImports.map(({imp}) => imp).join('\r\n');
    const dirsExports = dirsPreImports.map(({exp}) => exp).join(',\r\n    ');
    const fileImports = filePreImports.map(({imp}) => imp).join('\r\n');
    const fileExports = filePreImports.map(({exp}) => exp).join(',\r\n    ');
    const allExports = `export {\r\n    ${dirsExports ? dirsExports + ',\r\n    ' : ''}${fileExports ? fileExports + ',\r\n    ' : ''}\r\n};`;
    return [dirsImports, fileImports, allExports].filter(code => !!code).join('\r\n');
}
