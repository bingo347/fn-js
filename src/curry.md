# curry

Wrap given function to a curried variant.
The second argument - number of curried arguments in given function.
It's optional, and default is function.length.

```javascript
import curry from '@bingo347/fn/curry';
```

signature:

```typescript
declare function curry(fn: (...args: any[]) => any, argsCount?: number): () => any;
```

example:

```javascript
const add = curry((num1, num2) => {
    return num1 + num2;
});
add(1, 2); // 3
add(1)(2); // 3
const add5 = add(5);
add5(3); // 8
add5(4); // 9

curry((a, b, c) => {}).length; // 3
curry((a, b, c = 0) => {}).length; // 2
curry((a, b, c = 0) => {}, 3).length; // 3

const log = curry((...args) => console.log(args), 3);
log(1)(2)(3); // logged: [1, 2, 3]
log(1, 2)(3); // logged: [1, 2, 3]
log(1)(2, 3, 4); // logged: [1, 2, 3, 4]
log(1, 2); // not logged becose original function is not called
```
