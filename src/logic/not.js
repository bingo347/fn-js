function not(predicate) {
    return (...args) => !predicate(...args);
}

export default not;
