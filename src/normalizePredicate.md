## normalizePredicate(predicate: ValuePredicatable<V>)

Takes in predicate.  
If the predicate is a function, normalizePredicate will return it.   
If predicate is not a function, normalizePredicate will return `true` if predicate is truthy or `false` if it is falsy.

    normalizePredicate('string') // true

    const func = () => {
        return true;
    }

    normalizePredicate(func) // func