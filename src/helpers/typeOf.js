import curry from '../fn/curry';

function typeOf(type, value) {
    return typeof value === type;
}

export default curry(typeOf);
