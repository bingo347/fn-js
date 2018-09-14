import mapReduceArgs from '../../mapReduceArgs';
import curry from '../../curry';
import greater from '../greater';

const gt = mapReduceArgs(Number, greater);

export default curry(gt, 2);
