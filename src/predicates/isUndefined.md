# predicates/isUndefined

Returns true if the given value is undefined. Otherwise returns false.

```javascript
import isUndefined from '@bingo347/fn/predicates/isUndefined';
```

signature:

```typescript
declare function isUndefined(value: any): value is undefined;
```

example:

```javascript
isUndefined(7); // false
isUndefined(undefined); // true

let b;
isUndefined(b); // true
```