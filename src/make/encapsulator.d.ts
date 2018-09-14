interface EncapsulatedFunction extends Function {}

interface Encapsulator {
    encapsulate(...encapsulatedArgs: any[]): EncapsulatedFunction;
}

interface Applier {
    applyTo(fn: Function, onRight?: boolean): EncapsulatedFunction;
}

interface EncapsulatorApplier {
    applyTo(fn: Function, onRight?: boolean): Encapsulator;
    encapsulate(...encapsulatedArgs: any[]): Applier;
}

declare function makeEncapsulator(): EncapsulatorApplier;

export default makeEncapsulator;
