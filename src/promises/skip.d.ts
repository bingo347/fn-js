interface Skip<V, R> {
    (cb: (value: V, ...args: any[]) => R): (value: V | Skip<any, any>, ...args: any[]) => R;
}
declare function skip<V, R>(cb: (value: V, ...args: any[]) => R): (value: V | Skip<any, any>, ...args: any[]) => R;

export default skip;
