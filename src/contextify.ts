/**
 * wrap given function for get this as first argument
 * @param fn function for wrap
 * @returns wrapped function
 *
 * @example
 * const obj = {
 *     prop: 1,
 *     methodA: contextify(self => self.methodB(self.prop)),
 *     methodB: contextify((self, argument) => {
 *         console.log(self); // logged obj
 *         return argument;
 *     })
 * };
 * obj.methodA(); // => 1
 *
 * const f = contextify(self => ++self.counter).bind({counter: 0});
 * f(); // => 0
 * f(); // => 1
 * f(); // => 2
 */
function contextify<This, Args extends any[], Result>(
    fn: (self: This, ...args: Args) => Result
): (this: This, ...args: Args) => Result {
    return function(...args: Args): Result {
        return fn(this, ...args);
    };
}

export default contextify;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test('this as first argument', t => {
        interface This {
            prop: boolean;
            methodA(): boolean;
            methodB(argument: boolean): boolean;
        }
        t.true({
            prop: true,
            methodA: contextify((self: This) => self.methodB(self.prop)),
            methodB: contextify((self: This, argument: boolean) => {
                return argument;
            })
        }.methodA());

        const testObj = {};
        t.is(testObj, contextify((self: {}) => self).call(testObj));
    });
})();
// </test>
