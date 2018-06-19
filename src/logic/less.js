import curry from '../fn/curry';

function less(a, b) {
    return a < b;
}

export default curry(less);
