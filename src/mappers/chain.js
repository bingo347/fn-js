const reducer = (value, mapper) => mapper(value);

/**
 * @name chain
 * @param  {...(arg: *) => *} mappers
 * @returns {(arg: *) => *}
 */
function chain(...mappers) {
    return value => mappers.reduce(reducer, value);
}

export default chain;
