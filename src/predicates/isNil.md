# predicates/isNil

Returns true if the given value is null or undefined.  
Otherwise returns false.

```javascript
import isNil from '@bingo347/fn/predicates/isNil';
```

signature:

```typescript
declare function isNil(value: any): value is void;
```

example:

```javascript
isNil(10); // false
isNil(null); // true
isNil(undefined); // true
```