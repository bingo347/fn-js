import not from '../logic/not';

const hasSymbol = typeof Symbol === 'function';
const PIPELINE = hasSymbol ? Symbol('pipeline') : '@@pipeline';
const T_MAP = 'map';
const T_FILTER = 'filter';
const T_TAKE = 'take';

class IteratorBuilder {
    constructor() {
        Object.defineProperty(this, PIPELINE, {
            value: []
        });
    }

    release() {
        return makeIterator(this[PIPELINE]);
    }

    map(mapper) {
        this[PIPELINE].push({
            type: T_MAP,
            fn: mapper
        });
    }

    filter(predicate) {
        this[PIPELINE].push({
            type: T_FILTER,
            fn: predicate
        });
    }

    take(limit) {
        this[PIPELINE].push({
            type: T_TAKE,
            fn: (_, {length}) => length === limit
        });
    }

    takeWhile(predicate) {
        this[PIPELINE].push({
            type: T_TAKE,
            fn: not(predicate)
        });
    }
}

export default () => new IteratorBuilder();

function makeIterator(pipeline) {
    return iterable => {
        const accumulator = [];
        const iterator = extractIterator(iterable);
        if(!iterator) {
            return accumulator;
        }
        mainLoop: for(;;) {
            const item = iterator.next();
            if(item.done) {
                return accumulator;
            }
            let {value} = item;
            for(let i = 0; i < pipeline.length; i++) {
                const {type, fn} = pipeline[i];
                switch(type) {
                case T_MAP:
                    value = fn(value);
                    break;
                case T_FILTER:
                    if(!fn(value)) {
                        continue mainLoop;
                    }
                    break;
                case T_TAKE:
                    if(fn(value, accumulator)) {
                        return accumulator;
                    }
                    break;
                }
            }
            accumulator.push(value);
        }
    };
}

function extractIterator(iterable) {
    if(!iterable) { return; }
    if(hasSymbol && typeof iterable[Symbol.iterator] === 'function') {
        return iterable[Symbol.iterator]();
    }
    if(typeof iterable.length === 'number') {
        return makeLengthIterator(iterable);
    }
}

function makeLengthIterator(iterable) {
    const len = iterable.length;
    let i = 0;
    return {
        next() {
            if(i >= len) {
                return {
                    done: true
                };
            }
            const value = iterable[i];
            i++;
            return {
                value,
                done: false
            };
        }
    };
}
