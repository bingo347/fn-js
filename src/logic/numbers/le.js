import curry from '../../curry';
import eq from './eq';
import lt from './lt';
import or from '../or';

/**
 * @name le
 * @function
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
const le = or(eq, lt);

export default curry(le, 2);
