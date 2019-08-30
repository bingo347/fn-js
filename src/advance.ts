import identity from './identity';

let needWarn = true;
function advance<T>(value: T): T {
    if(needWarn) {
        needWarn = false;
        // eslint-disable-next-line no-console
        console.warn('Function @bingo347/advance was moved to @bingo347/identity and will be removed in next version of library');
    }
    return identity(value);
}

export default advance;

// <test>
import test from 'ava';
(function() {
    if(module.parent.id !== '.') { return; }
    test.todo('deprecated');
})();
// </test>
