const { slugify } = require('simply-slugy');
const { removeDiacritics } = require('strip-diacritics');

function formatFilename(filename, options = {}) {
    if (typeof filename !== 'string') return '';
    
    const separator = options.separator || '-';
    const lowercase = options.lowercase !== false;
    
    // Remove diacritics
    let cleanName = removeDiacritics(filename);

    // Apply slugification
    cleanName = slugify(cleanName, { separator });

    return lowercase ? cleanName.toLowerCase() : cleanName;
}

module.exports = formatFilename;
