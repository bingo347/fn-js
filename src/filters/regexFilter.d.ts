import {Predicate} from '../_global';

declare function regexFilter(regex: RegExp): Predicate<string>;

export default regexFilter;
