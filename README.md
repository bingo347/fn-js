# fn

A library for declarative programming with higher order functions

## Installation

```bash
npm i -S @bingo347/fn
```

or

```bash
yarn add @bingo347/fn
```

## Usage example

wrap DOMReady wait to Promise

```javascript
import makeSubscriber from '@bingo347/fn/make/subscriber';
import extractField from '@bingo347/fn/mappers/extractField';
import chain from '@bingo347/fn/mappers/chain';
import equal from '@bingo347/fn/logic/equal';
import or from '@bingo347/fn/logic/or';

const subscribe = makeSubscriber('addEventListener', 'removeEventListener');
const isDocumentReady = chain(
    extractField('readyState'),
    or(equal('complete'), equal('interactive'))
);

function domReady(doc = document) {
    return (isDocumentReady(doc)
        ? Promise.resolve()
        : new Promise(resolve => {
            const doResolve = () => resolvers.forEach(resolver => resolver());
            const resolvers = [
                subscribe(doc, 'DOMContentLoaded', doResolve),
                subscribe(doc.defaultView, 'load', doResolve),
                resolve
            ];
        })
    );
}

domReady().then(() => {
    //current document is ready
});
domReady(iframe.contentDocument).then(() => {
    //iframe document is ready
});
```

## Two module systems support

All library functions are provided in two variants:

- ES6 modules with .mjs extension, for use with module bundler (webpack) or use in node.js with [--experimental-modules flag](https://nodejs.org/dist/latest/docs/api/esm.html) or with [esm](https://www.npmjs.com/package/esm)
- commonJS modules with .js extension, for use in node.js without any helpers

## ES5 support

All library functions are provided in ES6 (ES2015) compatible code.\
It don't transpiled, but you can use webpack with babel for transpile it for old browsers

```javascript
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                include: modulePath => {
                    if(modulePath.includes('node_modules/@bingo347/fn')) {
                        // transpile this library
                        return true;
                    }
                    if(modulePath.includes('node_modules')) {
                        // don't transpile other libraries
                        return false;
                    }
                    // transpile your code
                    return true;
                },
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {modules: false}]]
                    }
                }]
            },
            // your other webpack module.rules
        ]
    },
    // your other webpack options
}
```

## Documentation

In progress...

## License

MIT
