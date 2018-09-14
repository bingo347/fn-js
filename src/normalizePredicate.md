# normalizePredicate

If transform [Predicatable](#general-concepts) to [Predicate](#general-concepts).

```javascript
import normalizePredicate from '@bingo347/fn/normalizePredicate';
```

signature:

```typescript
declare function normalizePredicate<V = any>(predicate: Predicatable<V>): Predicate<V>;
```

example:

```javascript
normalizePredicate('string'); // true

const func = () => {
    return true;
}

normalizePredicate(func)(); // true
```
