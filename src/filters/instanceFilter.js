/**
 * @name instanceFilter
 * @param {function} ClassConstructor
 * @returns {(value: *) => boolean}
 */
function instanceFilter(ClassConstructor) {
    return value => value instanceof ClassConstructor;
}

export default instanceFilter;
