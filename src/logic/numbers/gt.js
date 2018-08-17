import mapReduceArgs from '../../mapReduceArgs';
import curry from '../../curry';
import greater from '../greater';

/**
 * @name gt
 * @function
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const gt = mapReduceArgs(Number, greater);

export default curry(gt, 2);
