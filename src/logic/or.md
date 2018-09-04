## or(...predicates)

Returns true if at least one argument is true. Otherwise returns false.

    or('', null, 0) // false
    or(1, '', 'string') // true