import {Mapper} from '../_global';

interface Skip<V = any, R = any> {
    (cb: Mapper<V, R>): Mapper<V | Skip, R>
}

declare function skip<V = any, R = any>(cb: Mapper<V, R>): Mapper<V | Skip, R>;

export default skip;
