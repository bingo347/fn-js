# predicates/isSymbol

Returns true if the given value is a Symbol. Otherwise returns false.

```javascript
import isSymbol from '@bingo347/fn/predicates/isSymbol';
```

signature:

```typescript
declare function isSymbol(value: any): value is symbol;
```

example:

```javascript
isSymbol(15); // false

let sym = Symbol();
isSymbol(sym); // true
```