type EventHandler = EventListenerOrEventListenerObject | ((...args: any[]) => void);

interface CurriedSubscriber<R> {
    (eventName: string, handler: EventHandler): R;
    (eventName: string): (handler: EventHandler) => R
}

interface Subscriber {
    (target: object, eventName: string, handler: EventHandler): () => void;
    (target: object, eventName: string): (handler: EventHandler) => () => void;
    (target: object): CurriedSubscriber<() => void>;
    once(target: object, eventName: string, handler: EventHandler): void;
    once(target: object, eventName: string): (handler: EventHandler) => void;
    once(target: object): CurriedSubscriber<void>;
}

declare function makeSubscriber(addMethodName: string, removeMethodName: string, onceMethodName?: string): Subscriber;

export default makeSubscriber;
