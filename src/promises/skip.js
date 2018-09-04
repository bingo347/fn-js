function skip(cb) {
    return (value, ...args) => {
        if(value === skip) {
            return skip;
        }
        return cb(value, ...args);
    };
}

export default skip;
