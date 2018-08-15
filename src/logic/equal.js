import curry from '../curry';

function equal(a, b) {
    return a === b;
}

export default curry(equal);
