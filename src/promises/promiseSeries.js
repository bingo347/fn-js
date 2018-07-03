const reducer = (promise, mapper) => promise.then(mapper);

function promiseSeries(...mappers) {
    return value => mappers.reduce(reducer, Promise.resolve(value));
}

export default promiseSeries;
