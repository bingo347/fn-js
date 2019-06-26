/**
 * Mapper type is function for transform values
 */
export type Mapper<V = any, R = any> = (...args: [V, ...any[]]) => R;

/**
 * Predicate type is function for calculate condition from value
 */
export type Predicate<V = any> = (...args: [V?, ...any[]]) => boolean;

/**
 * Predicatable type is Predicate or raw boolean
 */
export type Predicatable<V = any> = Predicate<V> | boolean;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test.todo('only types here');
})();
// </test>
