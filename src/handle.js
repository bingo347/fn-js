import isFunction from './predicates/isFunction';

/**
 * @name handle
 * @param {...handlers: (value: *) => void}
 * @return {{(value: *) => *}}
 */
function handle(...handlers) {
    return value => {
        handlers.forEach(handler => {
            isFunction(handler) && handler(value);
        });
        return value;
    };
}

export default handle;
