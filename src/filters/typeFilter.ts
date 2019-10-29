import equal from '../logic/equal';

type TypeMap = {
    string: string;
    number: number
    bigint: bigint
    boolean: boolean
    symbol: symbol
    undefined: undefined
    object: object
    function: (...args: any[]) => any
};

/**
 * make typeof Predicate
 * @param type type name
 * @return typeof Predicate
 */
function typeFilter<T extends keyof TypeMap>(type: T) {
    const typeEqual = equal<T, T>(type);
    return (value: any): value is TypeMap[T] => typeEqual(typeof value as T);
}

export default typeFilter;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('typeof', t => {
        t.true(typeFilter('function')(() => {}));
        t.true(typeFilter('object')({}));
        t.true(typeFilter('string')(''));
        t.true(typeFilter('number')(0));
    });
})();
// </test>
