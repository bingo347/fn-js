import curry from '../curry';

/**
 * @name makeSubscriber
 * @param {string} addMethodName
 * @param {string} removeMethodName
 * @param {?string} onceMethodName
 * @returns {(target: object, eventName: string, handler: function) => () => void} subscribe
 */
function makeSubscriber(addMethodName, removeMethodName, onceMethodName) {
    /**
     * @name subscribe
     * @param {object} target
     * @param {string} eventName
     * @param {function} handler
     */
    function subscribe(target, eventName, handler) {
        target[addMethodName](eventName, handler);
        return function unsubscribe() {
            target[removeMethodName](eventName, handler);
        };
    }
    /**
     * @name once
     * @param {object} target
     * @param {string} eventName
     * @param {function} handler
     */
    const once = (onceMethodName
        ? (function subscribeOnce(target, eventName, handler) {
            target[onceMethodName](eventName, handler);
        })
        : (function subscribeOnce(target, eventName, handler) {
            const unsubscribe = subscribe(target, eventName, function() {
                unsubscribe();
                handler.apply(this, arguments);
            });
        })
    );
    const curriedSubscribe = curry(subscribe);
    curriedSubscribe.once = curry(once);
    return curriedSubscribe;
}

export default makeSubscriber;
