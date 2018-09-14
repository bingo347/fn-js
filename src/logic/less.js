import curry from '../curry';

function less(a, b) {
    return a < b;
}

export default curry(less);
