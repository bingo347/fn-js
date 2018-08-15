/**
 * It's internal function for stabilization api
 * If this module is in your bundle
 * then you use deprecated paths to functions!
 *
 * This functions will be removed in next version of library!
 */
/* global console */

const BASE_PATH = '@bingo347/fn/';

function _move(origFN, pathFrom, pathTo) {
    let needWarn = true;
    return function() {
        if(needWarn) {
            needWarn = false;
            // eslint-disable-next-line no-console
            console.warn(`Function ${BASE_PATH}${pathFrom} was moved to ${BASE_PATH}${pathTo} and will be removed in next version of library`);
        }
        return origFN.apply(this, arguments);
    };
}

export default _move;
