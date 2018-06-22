import isNumber from './isNumber';
import and from '../logic/and';

const isInteger = and(isNumber, val => val === Math.floor(val));

export default isInteger;
