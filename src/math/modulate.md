# modulate

:curried

Returns the division remainder

```javascript
import modulate from '@bingo347/math/modulate';
```

signature:

```typescript
declare function modulate(a: number, b: number): number;
declare function modulate(a: number): (b: number) => number;
```

example:

```javascript
modulate(4, 'string') // NaN
modulate(4, 2) // 0
modulate(2)(4) // 2
```
