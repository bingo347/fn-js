import path from 'path';
import exec from './exec';

const _babel = path.join(__dirname, '../_babel.js');

async function babelize(file) {
    const {stdout} = await exec(`cat ${file} | node ${_babel}`);
    return String(stdout);
}

export default babelize;
