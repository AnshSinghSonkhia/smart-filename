function getSafeExtension(filename) {
    if (typeof filename !== 'string') return '';

    const match = filename.match(/\.([a-zA-Z0-9]+)$/);
    return match ? match[1] : '';
}

module.exports = getSafeExtension;
