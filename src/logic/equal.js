import carry from '../fn/carry';

function equal(a, b) {
    return a === b;
}

export default carry(equal);
