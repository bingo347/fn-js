# predicates/isNull

Returns true if the given value is null. Otherwise returns false.

```javascript
import isNull from '@bingo347/fn/predicates/isNull';
```

signature:

```typescript
declare function isNull(value: any): value is null;
```

example:

```javascript
isNull(15); // false
isNull(null); // true
```