import test, {TestInterface} from 'ava';
import findInDirectory from './helpers/findInDirectory';
import {SRC_PATH} from './helpers/paths';

findInDirectory(
    SRC_PATH,
    filePath => filePath.endsWith('.ts')
).then(filesForTest => {
    filesForTest.map(require).filter(e => {
        if(e && typeof e.Test === 'function') {
            (e.Test as (test: TestInterface) => void)(test);
        }
    })
}).catch(console.error);
