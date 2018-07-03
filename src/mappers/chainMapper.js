const reducer = (value, mapper) => mapper(value);

function chainMapper(...mappers) {
    return value => mappers.reduce(reducer, value);
}

export default chainMapper;
