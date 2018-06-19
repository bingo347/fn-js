import isFunction from '../predicates/isFunction';

function advance(...handlers) {
    return value => {
        handlers.forEach(handler => {
            isFunction(handler) && handler(value);
        });
        return value;
    };
}

export default advance;
