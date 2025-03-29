const path = require('path');
const { removeDiacritics } = require('strip-diacritics');

function formatFilename(filename, options = {}) {
    if (typeof filename !== 'string') return '';

    const {
        separator = '-',
        maxLength = null,
        lowercase = true,
        removeExtension = false
    } = options;

    // Extract filename and extension
    const ext = path.extname(filename);
    let name = path.basename(filename, ext);

    // Normalize text (remove diacritics & unwanted characters)
    name = removeDiacritics(name)
        .replace(/[^a-zA-Z0-9]+/g, separator) // Replace special chars with separator
        .replace(new RegExp(`^${separator}|${separator}$`, 'g'), ''); // Trim extra separators

    // Apply lowercase if needed
    if (lowercase) {
        name = name.toLowerCase();
    }

    // Apply truncation (preserve extension if not removed)
    if (maxLength && name.length > maxLength) {
        name = name.slice(0, maxLength);
    }

    // Return formatted filename with or without extension
    return removeExtension ? name : `${name}${ext}`;
}

module.exports = formatFilename;
