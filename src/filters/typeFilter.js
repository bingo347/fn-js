import equal from '../logic/equal';
/**
 * @name typeFilter
 * @param {string} type
 * @returns {(value: *) => boolean}
 */
function typeFilter(type) {
    const typeEqual = equal(type);
    return value => typeEqual(typeof value);
}

export default typeFilter;
