import path from 'path';
import pkg from '../package.json';
import fsA from './helpers/fsAsync';
import {DIST_PATH} from './helpers/paths';

Promise.all([
    makePKG(),
    copyREADME()
]).catch(console.error);

function makePKG() {
    const newPKG = Object.assign({}, pkg, [
        'scripts',
        'devDependencies'
    ].reduce((acc, key) => {
        acc[key] = void 0;
        return acc;
    }, {}));
    return fsA.writeFile(
        path.join(DIST_PATH, 'package.json'),
        JSON.stringify(newPKG, null, 2)
    );
}

function copyREADME() {
    return fsA.copyFile(
        path.join(__dirname, '../README.md'),
        path.join(DIST_PATH, 'README.md')
    );
}
