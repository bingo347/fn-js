# arrayOfFilter

If a received argument is a `String` indicating the type of the operand, `arrayOfFilter` will return `true` if all element in the tested array are of the same type and it will return `false` otherwise.

If a received argument is not a `String`, `arrayOfFilter` will return `true` is the argument is truthy and it will return `false` otherwise.

```javascript
import arrayOfFilter from '@bingo347/filters/arrayOfFilter';
```

signature:

```typescript
declare function arrayOfFilter<V = any>(elementsPredicate: Predicate<V>): Predicate<V[]>;
declare function arrayOfFilter(elementsPredicate: string): Predicate<any[]>;
```

example:

```javascript
arrayOfFilter('string')(['a', 'b', 'c']); // true
arrayOfFilter('boolean')(['a', true, 'c']); // false
arrayOfFilter(2)([0, undefined, null]); // true
```