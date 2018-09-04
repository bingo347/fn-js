import {transform} from 'babel-core';
import fsA from './fsAsync';

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
    const source = await fsA.readFile(file, 'utf-8');
    const {code} = transform(source, babelOptions);
    return code;
}

export default babelize;
