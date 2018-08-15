import curry from '../curry';

function makeSubscriber(addMethodName, removeMethodName, onceMethodName) {
    function subscribe(target, eventName, handler) {
        target[addMethodName](eventName, handler);
        return function unsubscribe() {
            target[removeMethodName](eventName, handler);
        };
    }
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
