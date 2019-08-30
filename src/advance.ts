import identity from './identity';

let needWarn = true;
function advance<T>(value: T): T {
    if(needWarn) {
        needWarn = false;
        // tslint:disable-next-line:no-console
        console.warn('Function @bingo347/fn/advance was moved to @bingo347/fn/identity and will be removed in next version of library');
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
