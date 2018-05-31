function or(...predicates) {
    return (...args) => predicates.some(predicate => !!predicate(...args));
}

export default or;
