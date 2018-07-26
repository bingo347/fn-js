**curry (fn, argsCount)**

Takes two arguments - a function and the number of arguments expected by it.

Returns a curried function.

If no `argsCount` have been provided it invokes `fn` and returns its result.

With `argsCount` it will return a function which takes the rest of `fn` arguments.