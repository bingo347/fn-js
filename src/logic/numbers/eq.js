import mapReduceArgs from '../../mapReduceArgs';
import curry from '../../curry';
import equal from '../equal';

const eq = mapReduceArgs(Number, equal);

export default curry(eq, 2);
