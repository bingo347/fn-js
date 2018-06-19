import isFunction from '../predicates/isFunction';

function handle(...handlers) {
    return value => {
        handlers.forEach(handler => {
            isFunction(handler) && handler(value);
        });
        return value;
    };
}

export default handle;
