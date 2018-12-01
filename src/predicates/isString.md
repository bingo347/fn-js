# predicates/isString

Returns true if the given value is a string.  
Otherwise returns false.

```javascript
import isString from '@bingo347/fn/predicates/isString';
```

signature:

```typescript
declare function isString(value: any): value is string;
```

example:

```javascript
isString(8); // false
isString('is a string'); // true
```