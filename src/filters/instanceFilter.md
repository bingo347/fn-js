**instanceFilter(ClassConstructor)**

Takes a function as an argument.

Returns `true` if tested function is an instance of `ClassConstructor`. Otherwise returns `false`.

    function Thing() {}

    const thing = new Thing();

    instanceFilter(Thing)(thing) // true