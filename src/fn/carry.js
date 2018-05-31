export default function carry(fn, argsCount = 0) {
    const needRealeseArgs = argsCount || fn.length;
    const args = [];
    function carried(...subArgs) {
        args.push(...subArgs);
        if(subArgs.length === 0 || args.length >= needRealeseArgs) {
            return fn(...args);
        }
        return carried;
    }
    return carried;
}
