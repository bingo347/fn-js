import {Mapper, Predicate} from '../_global';

interface IteratorBuilder<V, R> {
    release(): (iterable: Iterable<V>, ...args: any[]) => R[];
    map(mapper: Mapper<V, R>): this;
    filter(predicate: Predicate<V>): this;
    take(limit: number): this;
    takeWhile(predicate: Predicate<V>): this;
}

declare function makeIterator<V = any, R = V>(): IteratorBuilder<V, R>;

export default makeIterator;
