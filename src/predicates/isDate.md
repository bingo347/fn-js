# predicates/isDate

Returns true if the given value is a Date. Otherwise returns false.

```javascript
import isDate from '@bingo347/fn/predicates/isDate';
```

signature:

```typescript
declare function isDate(value: any): value is Date;
```

example:

```javascript
isDate('is a date'); // false
isDate(true); // false

const now = new Date();
isDate(now); // true
```