function isValidFilename(filename) {
    if (typeof filename !== 'string') return false;

    // Invalid characters for Windows, Linux, and macOS
    const invalidChars = /[<>:"/\\|?*\x00-\x1F]/;
    
    return !invalidChars.test(filename);
}

module.exports = isValidFilename;
