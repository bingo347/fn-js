import makeEncapsulator from '../make/encapsulator';

const reducerEncapsulator = makeEncapsulator().applyTo(
    (promise, mapper, ...encapsulatedArgs) => promise.then(value => mapper(value, ...encapsulatedArgs.slice(2))),
    true
);

function series(...mappers) {
    return (value, ...encapsulatedArgs) => {
        const reducer = reducerEncapsulator.encapsulate(...encapsulatedArgs);
        return mappers.reduce(reducer, Promise.resolve(value));
    };
}

export default series;
