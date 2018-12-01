# predicates/isNumber

Returns true if the given value is a number. Otherwise returns false.

```javascript
import isNumber from '@bingo347/fn/predicates/isNumber';
```

signature:

```typescript
declare function isNumber(value: any): value is number;
```

example:

```javascript
isNumber(1.25); // true
isNumber(10); // true
isNumber(true); // false
```