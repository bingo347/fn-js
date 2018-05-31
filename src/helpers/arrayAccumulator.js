function arrayAccumulator() {
    // @ mutable
    const accumulator = [];
    function accumulate(...args) {
        accumulator.push(...args);
        return accumulate;
    }
    accumulate.release = () => accumulator;
    return accumulate;
}

export default arrayAccumulator;
