import curry from '../curry';

function substract(a, b) {
    return a - b;
}

export default curry(substract);
