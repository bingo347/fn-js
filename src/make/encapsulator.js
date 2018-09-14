const hasSymbol = typeof Symbol === 'function';
const ENCAPSULATED = hasSymbol ? Symbol('encapsulated') : '@@encapsulated';

class Applier {
    constructor(encapsulatedArgs) {
        Object.defineProperty(this, ENCAPSULATED, {
            value: encapsulatedArgs
        });
    }

    applyTo(fn, onRight = false) {
        return makeEncapsulator(this[ENCAPSULATED], fn, onRight);
    }
}

class Encapsulator {
    constructor(fn, onRight) {
        Object.defineProperty(this, ENCAPSULATED, {
            value: [fn, onRight]
        });
    }

    encapsulate(...encapsulatedArgs) {
        return makeEncapsulator(encapsulatedArgs, ...this[ENCAPSULATED]);
    }
}

class EncapsulatorApplier {
    applyTo(fn, onRight = false) {
        return new Encapsulator(fn, onRight);
    }

    encapsulate(...encapsulatedArgs) {
        return new Applier(encapsulatedArgs);
    }
}

export default () => new EncapsulatorApplier();

function makeEncapsulator(encapsulatedArgs, fn, onRight) {
    return (onRight
        ? (...args) => fn(...args.concat(encapsulatedArgs))
        : (...args) => fn(...encapsulatedArgs.concat(args))
    );
}
