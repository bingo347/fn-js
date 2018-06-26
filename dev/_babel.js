'use strict';

const {transform} = require('babel-core');

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

const chunks = [];

process.stdin.on('data', data => chunks.push(data));
process.stdin.on('end', () => {
    const source = Buffer.concat(chunks).toString('utf-8');
    const {code} = transform(source, babelOptions);
    process.stdout.write(code, () => {
        process.exit(0);
    });
});
