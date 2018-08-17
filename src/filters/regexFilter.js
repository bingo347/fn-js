/**
 * @name regexFilter
 * @param {RegExp} regex
 * @returns {(str: string) => boolean}
 */
function regexFilter(regex) {
    return str => regex.test(str);
}

export default regexFilter;
