# typeFilter

Takes a string as an argument. 

Returns `true` if tested value is the same type as the argument. Otherwise returns `false`

```javascript
import typeFilter from '@bingo347/filters/typeFilter';
```

signature:

```typescript
declare function typeFilter(type: string): Predicate<any>;
```

example:

```javascript
typeFilter('boolean')(true); // true
typeFilter('string')(5); // false
```