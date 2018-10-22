# mappers/extractMethod

:curried

Takes in a method and an object.\
Will return the given method.\
If this method is a property of the object it can be executed.

```javascript
import extractMethod from '@bingo347/fn/mappers/extractMethod';
```

signature:

```typescript
declare function extractMethod(method: string | symbol, obj: void | object): (...args: any[]) => any;
declare function extractMethod(method: string | symbol): (obj: void | object) => (...args: any[]) => any;
```

example:

```javascript
const obj = {
    first_name: 'John',
    last_name: 'Doe',
    age: 23,
    getName: function() {
        return `My name is ${this.first_name} ${this.last_name}`;
    }
};

extractMethod('getName', obj)(); // My name is John Doe
extractMethod('getAge', obj)(); // 'x' is not a function
extractMethod('getAge', obj) // (...args) => any;
