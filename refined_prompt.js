/**
 * Converts a string to camelCase format
 * 
 * Handles multiple separators (spaces, underscores, hyphens), normalizes casing,
 * preserves numbers, and safely handles edge cases.
 * 
 * @function toCamelCase
 * @param {string} input - The input string to convert to camelCase
 * @returns {string} The camelCase version of the input string. Returns empty string for null/undefined inputs
 * @throws {TypeError} Will not throw; returns empty string for invalid input types
 * 
 * @description
 * This function transforms strings containing various word separators into camelCase format.
 * It handles:
 * - Multiple consecutive separators (spaces, underscores, hyphens)
 * - Mixed case normalization
 * - Preservation of numeric characters
 * - Leading/trailing whitespace trimming
 * - Edge cases (null, undefined, empty strings, separator-only strings)
 * 
 * @example
 * toCamelCase('hello_world') // 'helloWorld'
 * toCamelCase('hello-world foo') // 'helloWorldFoo'
 * toCamelCase('HELLO_WORLD') // 'helloWorld'
 * toCamelCase('user_2_name') // 'user2Name'
 * toCamelCase('HTTP_STATUS_CODE') // 'httpStatusCode'
 * toCamelCase('') // ''
 * toCamelCase(null) // ''
 * toCamelCase(undefined) // ''
 * toCamelCase('___') // ''
 * 
 * @complexity
 * - Time: O(n) where n is the length of the input string
 * - Space: O(n) for storing normalized strings and word arrays
 * 
 * @see runTests For unit test examples and edge case validation
 */
function toCamelCase(input) {
  if (input == null || typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(word => word.length > 0)
    .map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

function runTests() {
  const tests = [
    { input: 'hello_world', expected: 'helloWorld' },
    { input: 'hello-world foo', expected: 'helloWorldFoo' },
    { input: 'HELLO_WORLD', expected: 'helloWorld' },
    { input: 'user_2_name', expected: 'user2Name' },
    { input: 'HTTP_STATUS_CODE', expected: 'httpStatusCode' },
    { input: '', expected: '' },
    { input: null, expected: '' },
    { input: undefined, expected: '' },
    { input: '___', expected: '' },
  ];

  let passed = 0;
  let failed = 0;

  tests.forEach(test => {
    const result = toCamelCase(test.input);
    if (result === test.expected) {
      passed++;
    } else {
      failed++;
      console.log(`Failed: ${test.input} => ${result} (expected ${test.expected})`);
    }
  });

  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${passed + failed}`);
}

// Run tests
runTests();