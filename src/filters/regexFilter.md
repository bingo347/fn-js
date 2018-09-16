# regexFilter

Takes one argument - a regular expression.

Returns `true` if tested string contains given `regex` and `false` if it does not.

```javascript
import regexFilter from '@bingo347/filters/regexFilter';
```

signature:

```typescript
declare function regexFilter(regex: RegExp): Predicate<string>;
```

example:

```javascript
regexFilter(/^The/)('The end'); // true
regexFilter(/^The/)('A regular expression is a pattern'); // false
```