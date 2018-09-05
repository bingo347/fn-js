declare function extractField<R>(field: string | symbol, obj: void | object): void | R;
declare function extractField<R>(field: string | symbol): (obj: void | object) => void | R;

export default extractField;
