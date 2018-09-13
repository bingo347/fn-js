function instanceFilter(ClassConstructor) {
    return value => value instanceof ClassConstructor;
}

export default instanceFilter;
