import curry from '../curry';

function modulate(a, b) {
    return a % b;
}

export default curry(modulate);
