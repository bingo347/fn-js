# mappers/chain

It take in any number of functions as arguments.\
Allows to execute functions one after another.\
Calls every function with passed down value.

```javascript
import chain from '@bingo347/fn/mappers/chain';
```

signature:

```typescript
declare function chain<V, R>(...mappers: ValueMapper<V, R>[]): ValueMapper<V, R>;
```

example:

```javascript
const add = num => {
    return num + num;
};
const multiply = num => {
    return num * num;
};
const addAndMultiply = chain(add, multiply);
addAndMultiply(32); // 4096 becouse add(32) is 64, multiply(64) is 4096
```
