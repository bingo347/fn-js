declare function extractField<R = any>(field: string | symbol, obj: void | object): void | R;
declare function extractField<R = any>(field: string | symbol): (obj: void | object) => void | R;

export default extractField;
