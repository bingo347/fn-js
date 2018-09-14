# only

:curried

Finds and returns the argument of received function at given index

```javascript
import only from '@bingo347/fn/only';
```

signature:

```typescript
declare function only(argIndex: number, fn: (arg: any) => any): (...args: any[]) => any;
declare function only(argIndex: number): (fn: (arg: any) => any) => (...args: any[]) => any;

```

example:

```javascript
const func = (a) => {
    return a;
}
only(1, func)(1, 2); // 2
only(3, func)(1, 2); // undefined
```
