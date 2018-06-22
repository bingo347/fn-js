import isNumber from './isNumber';
import and from '../logic/and';
import not from '../logic/not';

const isFiniteNumber = and(isNumber, isFinite, not(isNaN));

export default isFiniteNumber;
