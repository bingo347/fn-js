# add  
*curried*

Returns the result of adding two received arguments

```javascript
import add from '@bingo347/math/add';
```

signature:

```typescript
declare function add(a: number, b: number): number;
declare function add(a: number): (b: number) => number;
```

example:

```javascript
add(1, 3); // 4
add(1, '3'); // 4
add(1, 'foo'); // NaN
add(1)(3); // 4
```