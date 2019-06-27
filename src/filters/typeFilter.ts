import {Predicate} from '../types';
import equal from '../logic/equal';

/**
 * make typeof Predicate
 * @param type type name
 * @return typeof Predicate
 */
function typeFilter(type: string): Predicate<any> {
    const typeEqual = equal(type);
    return value => typeEqual(typeof value);
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
