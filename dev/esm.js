'use strict';

const app = process.argv[2];
if(!app) {
    console.error('Process need argument');
    process.exit(1);
}

module.exports = require('esm')(module, {
    mode: 'auto',
    cjs: {
        namedExports: true,
        vars: true
    }
})(`./${app}.js`);

