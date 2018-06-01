import curry from '../fn/curry';

function equal(a, b) {
    return a === b;
}

export default curry(equal);
