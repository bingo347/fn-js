## curry (fn: (...args: any[]) => any, argsCount?: number)

Can take two arguments - a function and the number of arguments expected by it.

Returns a curried function.

It either invokes `fn` and returns its result or returns a function which takes the rest of the arguments of `fn`.


    function add(num1, num2) {
        return num1 + num2;
    }

    curry(add)(1, 2) // 3
    curry(add)(1)(2) // 3