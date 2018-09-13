# advance

Takes one argument and returns it.

```javascript
import advance from '@bingo347/fn/advance';
```

signature:

```typescript
declare function advance<T>(value: T): T;
declare function advance(value: any): any;
```

example:

```javascript
advance(1); // 1
advance('hello'); // 'hello'
advance(true); // true
```
