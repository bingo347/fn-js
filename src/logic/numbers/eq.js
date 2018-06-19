import mapReduceArgs from '../../fn/mapReduceArgs';
import curry from '../../fn/curry';
import equal from '../equal';

const eq = mapReduceArgs(Number, equal);

export default curry(eq, 2);
