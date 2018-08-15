import mapReduceArgs from '../../mapReduceArgs';
import curry from '../../curry';
import less from '../less';

const lt = mapReduceArgs(Number, less);

export default curry(lt, 2);
