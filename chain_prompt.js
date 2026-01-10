
function toKebabCase(input) {
    // Error handling for non-string inputs
    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected a string, but received ${typeof input}`);
    }

    // Handle empty strings
    if (input.length === 0) {
        return '';
    }

    // Split by common separators (spaces, hyphens, underscores) and filter empty parts
    const words = input
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    // Convert to kebab-case: all lowercase, separated by hyphens
    return words
        .map((word) => {
            // Remove special characters from each word
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
            return cleanWord.length > 0 ? cleanWord.toLowerCase() : '';
        })
        .filter((word) => word.length > 0)
        .join('-');
}

// Test cases for kebab-case
console.log(toKebabCase('hello world')); // hello-world
console.log(toKebabCase('hello_world')); // hello-world
console.log(toKebabCase('HELLO-WORLD')); // hello-world
console.log(toKebabCase('')); // ''
console.log(toKebabCase('single')); // single

// Error handling tests
try {
    toKebabCase(123);
} catch (e) {
    console.error(e.message); // Invalid input: expected a string, but received number
}

try {
    toKebabCase(null);
} catch (e) {
    console.error(e.message); // Invalid input: expected a string, but received object
}