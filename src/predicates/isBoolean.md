# predicates/isBoolean

Returns true if the given value is boolean. Otherwise returns false.

```javascript
import isBoolean from '@bingo347/fn/predicates/isBoolean';
```

signature:

```typescript
declare function isBoolean(value: any): value is boolean;
```

example:

```javascript
isBoolean('string') // false
isBoolean(true) // true
```