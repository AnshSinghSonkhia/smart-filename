# smart-filename 📁

NPM package designed for handling filenames safely and effectively. It provides utilities to format, sanitize, validate, truncate, and extract file extensions while ensuring compatibility across different operating systems. This package is particularly useful for developers dealing with file management, uploads, or generating SEO-friendly filenames.

[![npm](https://img.shields.io/npm/v/smart-filename.svg)](https://www.npmjs.com/package/smart-filename)  [![License](https://img.shields.io/npm/l/smart-filename.svg)](LICENSE) 

# 📦 Installation

Install via npm

```sh
npm i smart-filename
```

Install via yarn

```sh
yarn add smart-filename
```

---

# 🚀 Usage

```js
const smartFilename = require('smart-filename');

// Example 1️⃣: Format a filename (remove special chars, diacritics, and apply slugification)
console.log(smartFilename.formatFilename("Müller's Report: 2025.pdf")); 
// Output: "mueller-s-report-2025.pdf"

// Example 2️⃣: Truncate a long filename to a safe length
console.log(smartFilename.truncateFilename("very-long-filename-that-needs-to-be-shortened.txt", 20)); 
// Output: "very-long-filename.txt"

// Example 3️⃣: Get a safe file extension
console.log(smartFilename.getSafeExtension("document.final.version.docx")); 
// Output: "docx"

// Example 4️⃣: Sanitize a full file path
console.log(smartFilename.sanitizePath("/user/uploads/My*Illegal:File.txt")); 
// Output: "\user\uploads\my-illegal-file-txt"

// Example 5️⃣: Validate if a filename is safe
console.log(smartFilename.isValidFilename("safe_file.txt")); 
// Output: true

console.log(smartFilename.isValidFilename("invalid/file|name.txt")); 
// Output: false
```

### `formatFilename` with options:

```js
// Example 1️⃣: Custom Separator  
console.log(smartFilename.formatFilename("Müller's Report: 2025.pdf", { separator: "_" }));  
// Output: "mueller_s_report_2025.pdf"

// Example 2️⃣: Limit Length  
console.log(smartFilename.formatFilename("Very Long File Name with Extra Details.txt", { maxLength: 20 }));  
// Output: "very-long-file-name.txt"

// Example 3️⃣: Preserve Case  
console.log(smartFilename.formatFilename("My Cool File Name.JPG", { lowercase: false }));  
// Output: "My-Cool-File-Name.JPG"

// Example 4️⃣: Remove File Extension  
console.log(smartFilename.formatFilename("My_Resume_Final.docx", { removeExtension: true }));  
// Output: "my-resume-final"

// Example 5️⃣: Combine Multiple Options  
console.log(smartFilename.formatFilename("Résumé Final Version (2025).PDF", { separator: "_", lowercase: false, removeExtension: true }));  
// Output: "Resume_Final_Version_2025"
```

---

# 📖 API Reference

| Function               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `formatFilename`       | Formats a filename by normalizing text, replacing special characters, and applying custom rules. |
| `getExtension`         | Returns the file extension from a given filename.                          |
| `removeExtension`      | Returns the filename without its extension.                                |
| `sanitizeFilename`     | Removes unsafe characters to ensure filenames are system-safe.             |
| `truncateFilename`     | Truncates a filename to a specified length while preserving the extension. |
