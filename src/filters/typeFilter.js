import equal from '../logic/equal';

function typeFilter(type) {
    const typeEqual = equal(type);
    return value => typeEqual(typeof value);
}

export default typeFilter;
