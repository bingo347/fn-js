const reducer = (value, mapper) => mapper(value);

function chain(...mappers) {
    return value => mappers.reduce(reducer, value);
}

export default chain;
