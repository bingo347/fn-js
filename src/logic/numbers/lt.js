import mapReduceArgs from '../../fn/mapReduceArgs';
import curry from '../../fn/curry';
import less from '../less';

const lt = mapReduceArgs(Number, less);
lt.name = 'lt';

export default curry(lt, 2);
