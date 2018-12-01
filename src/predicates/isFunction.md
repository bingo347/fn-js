# predicates/isFunction

Returns true if the given value is a function. Otherwise returns false.

```javascript
import isFunction from '@bingo347/fn/predicates/isFunction';
```

signature:

```typescript
declare function isFunction(value: any): value is Function;
```

example:

```javascript
isFunction(42); // false
isFunction('is a function'); // false

const func = () => { /*...*/ };
isFunction(func); // true
```