import curry from '../curry';

function add(a, b) {
    return Number(a) + Number(b);
}

export default curry(add);
