import makeEncapsulator from '../make/encapsulator';

const reducerEncapsulator = makeEncapsulator().applyTo(
    (promise, mapper, ...encapsulatedArgs) => promise.then(value => mapper(value, ...encapsulatedArgs)),
    true
);

/**
 * @name series
 * @param  {...(value: *) => Promise} mappers
 * @returns {(value: *, ...encapsulatedArgs: *[]) => Promise}
 */
function series(...mappers) {
    return (value, ...encapsulatedArgs) => {
        const reducer = reducerEncapsulator.encapsulate(...encapsulatedArgs);
        return mappers.reduce(reducer, Promise.resolve(value));
    };
}

export default series;
