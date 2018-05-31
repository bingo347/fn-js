function and(...predicates) {
    return (...args) => predicates.every(predicate => !!predicate(...args));
}

export default and;
