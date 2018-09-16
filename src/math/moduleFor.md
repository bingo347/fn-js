# moduleFor

Returns the division remainder when the second argument is divided by the first argument

```javascript
import moduleFor from '@bingo347/math/moduleFor';
```

signature:

```typescript
declare function moduleFor(b: number): (a: number) => number;
```

example:

```javascript
moduleFor(4)(2); // 2
moduleFor(2)(4); // 0
moduleFor(4)('string'); // NaN
```