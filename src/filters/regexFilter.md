**regexFilter(regex)**

Takes one argument - a regular expression.

Return `true` if tested string contains given `regex` and `false` if it does not.

    regexFilter(/^The/)('The end') // true
    regexFilter(/^The/)('A regular expression is a pattern') // false