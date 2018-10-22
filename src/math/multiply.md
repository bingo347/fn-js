# multiply

:curried

Returns the result of multiplication of two received arguments

```javascript
import multiply from '@bingo347/math/multiply';
```

signature:

```typescript
declare function multiply(a: number, b: number): number;
declare function multiply(a: number): (b: number) => number;
```

example:

```javascript
multiply(2)('string'); // NaN
multiply(2)(4); // 8
multiply(-2, '3'); // -6
```
