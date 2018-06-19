import mapReduceArgs from '../../fn/mapReduceArgs';
import curry from '../../fn/curry';
import greater from '../greater';

const gtInternal = mapReduceArgs(Number, greater);

function gt(a, b) {
    return gtInternal(a, b);
}

export default curry(gt);
