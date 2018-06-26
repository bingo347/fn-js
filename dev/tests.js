import path from 'path';
import findInDirectory from './findInDirectory';

findInDirectory(
    path.join(__dirname, '../src'),
    filePath => filePath.endsWith('.test.js')
).then(filesForTest => {
    return filesForTest.map(filePath => require(filePath));
}).catch(console.error);
