import {readFile} from 'fs';
import {promisify} from 'util';
import {transform} from 'babel-core';

const readFileAsync = promisify(readFile);
const babelOptions = {
    presets: [
        ['env', {
            targets: {
                node: 6,
                browsers: [
                    'last 5 versions',
                    'ie >= 10',
                    'safari >= 9'
                ]
            },
            modules: 'commonjs'
        }]
    ]
};

async function babelize(file) {
    const source = await readFileAsync(file, 'utf-8');
    const {code} = transform(source, babelOptions);
    return code;
}

export default babelize;
