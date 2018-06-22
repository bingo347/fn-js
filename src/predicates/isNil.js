import isNull from './isNull';
import isUndefined from './isUndefined';
import or from '../logic/or';

const isNil = or(isNull, isUndefined);

export default isNil;
