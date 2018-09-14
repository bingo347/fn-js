import {Mapper} from '../_global';

declare function series<V, R>(...mappers: Mapper<V, Promise<R>>[]): Mapper<V, Promise<R>>;

export default series;
