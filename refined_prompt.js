/**
 * Converts a given string to camelCase format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camelCase version of the input string.
 *
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('hello-world'); // returns 'helloWorld'
 * toCamelCase('hello_world'); // returns 'helloWorld'
 * toCamelCase('HELLO WORLD'); // returns 'helloWorld'
 * toCamelCase(''); // returns ''
 * toCamelCase('single'); // returns 'single'
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} input - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The dot.case version of the input string.
 *
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('hello-world'); // returns 'hello.world'
 * toDotCase('hello_world'); // returns 'hello.world'
 * toDotCase('HELLO WORLD'); // returns 'hello.world'
 * toDotCase(''); // returns ''
 * toDotCase('single'); // returns 'single'
 */
function toCamelCase(input) {
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

    // Convert to camelCase: first word lowercase, rest capitalized
    return words
        .map((word, index) => {
            // Remove special characters from each word
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');

            if (cleanWord.length === 0) {
                return '';
            }

            if (index === 0) {
                return cleanWord.toLowerCase();
            }

            // Capitalize first letter, lowercase the rest
            return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('hello world')); // helloWorld
console.log(toCamelCase('hello-world')); // helloWorld
console.log(toCamelCase('hello_world')); // helloWorld
console.log(toCamelCase('HELLO WORLD')); // helloWorld
console.log(toCamelCase('')); // ''
console.log(toCamelCase('single')); // single

// Error handling tests
try {
    toCamelCase(123);
} catch (e) {
    console.error(e.message); // Invalid input: expected a string, but received number
}

try {
    toCamelCase(undefined);
} catch (e) {
    console.error(e.message); // Invalid input: expected a string, but received undefined
}

function toDotCase(input) {
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

    // Convert to dot.case: all lowercase, separated by dots
    return words
        .map((word) => {
            // Remove special characters from each word
            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
            return cleanWord.length > 0 ? cleanWord.toLowerCase() : '';
        })
        .filter((word) => word.length > 0)
        .join('.');
}

// Test cases for dot.case
console.log(toDotCase('hello world')); // hello.world
console.log(toDotCase('hello-world')); // hello.world
console.log(toDotCase('hello_world')); // hello.world
console.log(toDotCase('HELLO WORLD')); // hello.world
console.log(toDotCase('')); // ''
console.log(toDotCase('single')); // single

// Error handling tests
try {
    toDotCase(123);
} catch (e) {
    console.error(e.message); // Invalid input: expected a string, but received number
}

try {
    toDotCase(null);
} catch (e) {
    console.error(e.message); // Invalid input: expected a string, but received object
}
