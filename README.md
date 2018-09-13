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

## Documentation

In progress...

## License

MIT
