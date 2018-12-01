# predicates/isObject

Returns true if the given value is an object. Otherwise returns false.

```javascript
import isObject from '@bingo347/fn/predicates/isObject';
```

signature:

```typescript
declare function isObject(value: any): value is object;
```

example:

```javascript
isObject(23); // false
isObject(false); // false

let obj = {};
isObject(obj); // true
```