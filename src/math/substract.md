# substract  
*curried*

Return the result of subtraction of two received arguments

```javascript
import substract from '@bingo347/math/substract';
```

signature:

```typescript
declare function substract(a: number, b: number): number;
declare function substract(a: number): (b: number) => number;
```

example:

```javascript
substract(2)('string'); // NaN
substract(2)(4); // -2
substract(-2, '3'); // -5
```