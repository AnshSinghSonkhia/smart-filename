const path = require('path');
const formatFilename = require('./formatFilename');

function sanitizePath(filePath) {
    if (typeof filePath !== 'string') return '';

    const dir = path.dirname(filePath);
    const base = path.basename(filePath);
    
    return path.join(dir, formatFilename(base));
}

module.exports = sanitizePath;
