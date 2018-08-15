import curry from '../../curry';
import eq from './eq';
import lt from './lt';
import or from '../or';

const le = or(eq, lt);

export default curry(le, 2);
