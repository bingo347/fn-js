import curry from '../../curry';
import eq from './eq';
import gt from './gt';
import or from '../or';

/**
 * @name ge
 * @function
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const ge = or(eq, gt);

export default curry(ge, 2);
