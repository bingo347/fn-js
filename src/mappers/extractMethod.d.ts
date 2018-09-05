declare function extractMethod(method: string | symbol, obj: void | object): (...args: any[]) => any;
declare function extractMethod(method: string | symbol): (obj: void | object) => (...args: any[]) => any;

export default extractMethod;
