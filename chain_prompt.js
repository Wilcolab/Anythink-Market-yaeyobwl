/**
 * Converts a string to kebab-case with robust handling of edge cases.
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The kebab-case version of the input string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toKebabCase("First Name") // "first-name"
 * toKebabCase("user_id") // "user-id"
 * toKebabCase("mobileNumber") // "mobile-number"
 * toKebabCase("SCREEN_NAME") // "screen-name"
 * toKebabCase("first__name") // "first-name"
 * toKebabCase("user2Name") // "user2-name"
 */
function toKebabCase(input) {
    // Step 1: Input validation
    if (input === null || input === undefined) {
        throw new TypeError(`Expected a string, but received ${typeof input}: ${input}`);
    }

    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Step 2: Trim leading and trailing whitespace
    let result = input.trim();

    // Step 3: Insert hyphens before uppercase letters (for camelCase conversion)
    // This regex matches uppercase letters that follow lowercase letters or numbers
    result = result.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

    // Step 4: Replace all non-alphanumeric characters (except hyphens) with hyphens
    // This handles spaces, underscores, dots, and other delimiters
    result = result.replace(/[^a-zA-Z0-9-]/g, '-');

    // Step 5: Collapse consecutive hyphens into a single hyphen
    // This prevents double hyphens from multiple consecutive delimiters
    result = result.replace(/-+/g, '-');

    // Step 6: Remove leading and trailing hyphens
    result = result.replace(/^-+|-+$/g, '');

    // Step 7: Convert to lowercase
    result = result.toLowerCase();

    return result;
}

// Test cases covering various edge cases
const testCases = [
    // Basic cases
    { input: "First Name", expected: "first-name" },
    { input: "user_id", expected: "user-id" },
    { input: "mobileNumber", expected: "mobile-number" },

    // Edge cases
    { input: "first__name", expected: "first-name" }, // Multiple underscores
    { input: "  leading-space", expected: "leading-space" }, // Leading space
    { input: "trailing-space  ", expected: "trailing-space" }, // Trailing space
    { input: "mixed_delimiters.with-spaces", expected: "mixed-delimiters-with-spaces" }, // Mixed delimiters
    { input: "SCREEN_NAME", expected: "screen-name" }, // Uppercase
    { input: "user2Name", expected: "user2-name" }, // Contains numbers
    { input: "---already-kebab---", expected: "already-kebab" }, // Already kebab with extra hyphens
    { input: "a", expected: "a" }, // Single character
    { input: "ABC", expected: "abc" }, // All uppercase
    { input: "camelCaseString", expected: "camel-case-string" }, // CamelCase
    { input: "snake_case_string", expected: "snake-case-string" }, // Snake case
    { input: "dot.separated.string", expected: "dot-separated-string" }, // Dot-separated
];

// Run tests
console.log("Running test cases...\n");
testCases.forEach(({ input, expected }) => {
    try {
        const result = toKebabCase(input);
        const passed = result === expected;
        console.log(`${passed ? '✓' : '✗'} toKebabCase("${input}") = "${result}" (expected: "${expected}")`);
    } catch (error) {
        console.log(`✗ toKebabCase("${input}") threw error: ${error.message}`);
    }
});

// Test error handling
console.log("\nTesting error handling...\n");
const errorCases = [null, undefined, 123, false, {}, []];

errorCases.forEach((input) => {
    try {
        toKebabCase(input);
        console.log(`✗ toKebabCase(${input}) should have thrown an error`);
    } catch (error) {
        console.log(`✓ toKebabCase(${input}) correctly threw: ${error.message}`);
    }
});

/**
 * COMPLEXITY ANALYSIS:
 * 
 * Time Complexity: O(n)
 *   - trim(): O(n)
 *   - replace() calls: Each regex operation scans the string once, so O(n)
 *   - toLowerCase(): O(n)
 *   - Overall: O(n) where n is the length of the input string
 * 
 * Space Complexity: O(n)
 *   - Each replace() creates a new string in memory
 *   - Worst case: The result string is the same length as input
 *   - Overall: O(n) where n is the length of the input string
 */

module.exports = toKebabCase;