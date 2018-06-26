import findInDirectory from './helpers/findInDirectory';
import {SRC_PATH} from './helpers/paths';

findInDirectory(
    SRC_PATH,
    filePath => filePath.endsWith('.test.js')
).then(filesForTest => {
    return filesForTest.map(filePath => require(filePath));
}).catch(console.error);
