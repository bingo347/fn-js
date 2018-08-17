import mapReduceArgs from '../../mapReduceArgs';
import curry from '../../curry';
import less from '../less';

/**
 * @name lt
 * @function
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const lt = mapReduceArgs(Number, less);

export default curry(lt, 2);
