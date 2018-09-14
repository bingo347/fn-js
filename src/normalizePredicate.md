# normalizePredicate

If the predicate is a function, normalizePredicate will return it.   
If predicate is not a function, normalizePredicate will return `true` if predicate is truthy or `false` if it is falsy.

```javascript
import normalizePredicate from '@bingo347/fn/normalizePredicate';
```

signature:

```typescript
declare function normalizePredicate<V>(predicate: ValuePredicatable<V>): ValuePredicate<V>
```

example:

```javascript
normalizePredicate('string'); // true

const func = () => {
    return true;
}

normalizePredicate(func)(); // true
```