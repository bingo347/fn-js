import childProcess from 'child_process';
import {promisify} from 'util';

export default promisify(childProcess.exec);
