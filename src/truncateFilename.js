function truncateFilename(filename, maxLength = 50) {
    if (typeof filename !== 'string' || filename.length <= maxLength) return filename;

    const parts = filename.split('.');
    if (parts.length < 2) return filename.slice(0, maxLength); // No extension case

    const ext = parts.pop(); // Extract extension
    let name = parts.join('.'); // Remaining name part

    if (name.length > maxLength - ext.length - 1) {
        name = name.slice(0, maxLength - ext.length - 1);
    }

    return `${name}.${ext}`;
}

module.exports = truncateFilename;
