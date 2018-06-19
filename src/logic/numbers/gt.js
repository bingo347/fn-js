import mapReduceArgs from '../../fn/mapReduceArgs';
import curry from '../../fn/curry';
import greater from '../greater';

const gt = mapReduceArgs(Number, greater);
gt.name = 'gt';

export default curry(gt, 2);
