# mappers/extractField

:curried

Takes in a key and an object.\
If the object contains the given key, `extractField` will return a value associated with it. \
If the object doesn't contain the given value, `extractField` will return `undefined`.


```javascript
import extractField from '@bingo347/fn/mappers/extractField';
```

signature:

```typescript
declare function extractField<R = any>(field: string | symbol, obj: void | object): void | R;
declare function extractField<R = any>(field: string | symbol): (obj: void | object) => void | R;
```

example:

```javascript
const obj = {
    first_name: 'John',
    last_name: 'Doe',
    age: 23
};

extractField('field', obj); // undefined
extractField('first_name', obj); // John
extractField('age')(obj); // 23
