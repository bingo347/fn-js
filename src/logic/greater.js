import curry from '../fn/curry';

function greater(a, b) {
    return a > b;
}

export default curry(greater);
