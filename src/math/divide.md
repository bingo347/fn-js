# divide

:curried

Returns the quotient of two received arguments

```javascript
import divide from '@bingo347/math/divide';
```

signature:

```typescript
declare function divide(a: number, b: number): number;
declare function divide(a: number): (b: number) => number;
```

example:

```javascript
divide(4, 2); // 2
divide(4)(2); // 2
divide(4, 'string'); // NaN
divide(4, '3'); // 1.3333333333333333
```
