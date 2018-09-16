# devideTo

Returns the quotient of two arguments when the second argument is divided by the first argument

```javascript
import devideTo from '@bingo347/math/devideTo';
```

signature:

```typescript
declare function devideTo(b: number): (a: number) => number;
```

example:

```javascript
devideTo(4)(2); // 0.5
devideTo(4)(); // NaN
devideTo(4)('3'); // 0.75
```