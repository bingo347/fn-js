## only(argIndex, fn)

Takes two arguments - an index and a function.

Finds and returns the argument of `fn` at the `argIndex` index.

    only(1, add)(1, 2) // 2
    only(3, add)(1, 2) // undefined