# advance

Takes one argument and returns it.

```javascript
import advance from '@bingo347/fn/advance';
```

signature:

```typescript
declare function advance<T = any>(value: T): T;
```

example:

```javascript
advance(1); // 1
advance('hello'); // 'hello'
advance(true); // true
```
