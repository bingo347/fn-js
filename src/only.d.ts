declare function only(argIndex: number, fn: (arg: any) => any): (...args: any[]) => any;
declare function only(argIndex: number): (fn: (arg: any) => any) => (...args: any[]) => any;

export default only;
