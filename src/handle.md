# handle

Receives any number of functions as an argument, calls them with given value and returns it.

```javascript
import handle from '@bingo347/fn/handle';
```

signature:

```typescript
declare function handle<T = any>(...handlers: ((value: T) => void)[]): (value: T) => T;
```

example:

```javascript
const func = (str) => {
    return str;
};

handle(func)('string'); // 'string'
```
