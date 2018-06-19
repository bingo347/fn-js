import curry from '../../fn/curry';
import eq from './eq';
import gt from './gt';
import or from '../or';

const ge = or(eq, gt);

export default curry(ge, 2);
