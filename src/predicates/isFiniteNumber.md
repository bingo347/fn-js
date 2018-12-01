# predicates/isFiniteNumber

Returns true if the given value is a finite number.  
Otherwise returns false.

```javascript
import isFiniteNumber from '@bingo347/fn/predicates/isFiniteNumber';
```

signature:

```typescript
declare function isFiniteNumber(value: any): boolean;
```

example:

```javascript
isFiniteNumber(0); // true
isFiniteNumber('is a finite number'); // false
isFiniteNumber(Infinity); // false
```