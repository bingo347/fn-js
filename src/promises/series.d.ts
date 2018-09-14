import {ValueMapper} from '../_global';

declare function series<V, R>(...mappers: ValueMapper<V, Promise<R>>[]): ValueMapper<V, Promise<R>>;

export default series;
