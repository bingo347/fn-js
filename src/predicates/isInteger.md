# predicates/isInteger

Returns true if the given value is an integer.  
Otherwise returns false.

```javascript
import isInteger from '@bingo347/fn/predicates/isInteger';
```

signature:

```typescript
declare function isInteger(value: any): boolean;
```

example:

```javascript
isInteger(11); // true
isInteger(5.5); // false
isInteger('is an integer'); // false
```