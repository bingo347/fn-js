# always

Returns a function which will always return the received argument.

```javascript
import always from '@bingo347/fn/always';
```

signature:

```typescript
declare function always<T>(value: T): () => T;
declare function always(value: any): () => any;
```

example:

```javascript
always(1)(); // 1
const f = always([1, 2, 3, 4]); // [Function]
f(); // [1, 2, 3, 4]
```
