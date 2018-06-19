import mapReduceArgs from '../../fn/mapReduceArgs';
import curry from '../../fn/curry';
import greater from '../greater';

function gt(a, b) {
    return mapReduceArgs(Number, greater)(a, b);
}

export default curry(gt);
