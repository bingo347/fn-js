function regexFilter(regex) {
    return str => regex.test(str);
}

export default regexFilter;
