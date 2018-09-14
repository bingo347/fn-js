import {Mapper} from '../_global';

declare function delay<T = any>(timeout: number): Mapper<T, Promise<T>>;

export default delay;
