# substractFrom

Return the result of subtraction when the first argument is being subtracted from the second argument

```javascript
import substractFrom from '@bingo347/math/substractFrom';
```

signature:

```typescript
declare function substractFrom(b: number): (a: number) => number;
```

example:

```javascript
substractFrom(2)(4); // 2
substractFrom(2)('string'); // NaN
substractFrom('2')(-3); // -5
```