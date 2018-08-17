const reducer = (promise, mapper) => promise.then(mapper);

/**
 * @name series
 * @param  {...(value: *) => Promise} mappers
 * @returns {(value: *) => Promise}
 */
function series(...mappers) {
    return value => mappers.reduce(reducer, Promise.resolve(value));
}

export default series;
