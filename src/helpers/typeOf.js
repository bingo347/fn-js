import carry from '../fn/carry';

function typeOf(type, value) {
    return typeof value === type;
}

export default carry(typeOf);
