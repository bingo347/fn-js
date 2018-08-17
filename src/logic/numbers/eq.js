import mapReduceArgs from '../../mapReduceArgs';
import curry from '../../curry';
import equal from '../equal';

/**
 * @name eq
 * @function
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const eq = mapReduceArgs(Number, equal);

export default curry(eq, 2);
