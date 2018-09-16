# instanceFilter

Takes a function as an argument.

Returns `true` if tested function is an instance of `ClassConstructor`.   
Otherwise returns `false`.

```javascript
import instanceFilter from '@bingo347/filters/instanceFilter';
```

signature:

```typescript
declare function instanceFilter(ClassConstructor: FunctionConstructor): Predicate;
```

example:

```javascript
function Thing() {};

const thing = new Thing();

instanceFilter(Thing)(thing); // true
```