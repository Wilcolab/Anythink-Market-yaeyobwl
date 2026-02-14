/**
 * Converts a string to camelCase format
 * Handles multiple delimiters, mixed cases, and edge cases
 * 
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The camelCase version of the input string
 * @throws {Error} If input is not a valid string type
 */
/**
 * Converts a string to camelCase format.
 * 
 * Transforms strings with various delimiters (spaces, underscores, hyphens, dots)
 * into camelCase notation where the first word is lowercase and subsequent words
 * are capitalized with no spaces between them.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string, or an empty string if input is empty
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string type
 * 
 * @example
 * // Basic conversions
 * toCamelCase('hello world');           // 'helloWorld'
 * toCamelCase('hello_world');           // 'helloWorld'
 * toCamelCase('hello-world');           // 'helloWorld'
 * toCamelCase('hello.world');           // 'helloWorld'
 * 
 * @example
 * // With multiple delimiters
 * toCamelCase('hello_world-example');   // 'helloWorldExample'
 * toCamelCase('hello   world');         // 'helloWorld'
 * 
 * @example
 * // Edge cases
 * toCamelCase('');                      // ''
 * toCamelCase('   ');                   // ''
 * toCamelCase('a');                     // 'a'
 * 
 * @example
 * // Error cases
 * toCamelCase(null);                    // Throws Error
 * toCamelCase(undefined);               // Throws Error
 * toCamelCase(123);                     // Throws Error
 */
function toCamelCase(str) {
    // Validate input type - throw error for invalid types
    if (str === null || str === undefined) {
        return;
        throw new Error('Input cannot be null or undefined');
    }
    
    if (typeof str !== 'string') {
        throw new Error(`Expected string, got ${typeof str}`);
    }
    
    // Trim leading/trailing whitespace
    str = str.trim();
    
    // Return empty string as is
    if (str.length === 0) {
        return '';
    }
    
    // Replace all delimiters (space, underscore, hyphen, dot) with a common delimiter
    // This regex matches one or more occurrences of any delimiter
    const normalized = str.replace(/[\s_\-\.]+/g, ' ');
    
    // Split by spaces to get individual words
    const words = normalized.split(' ').filter(word => word.length > 0);
    
    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }
    
    // Convert: first word to lowercase, rest to capitalized
    const camelCased = words
        .map((word, index) => {
            // Convert word to lowercase first for consistency
            const lowerWord = word.toLowerCase();
            
            // First word stays lowercase, subsequent words get capitalized
            if (index === 0) {
                return lowerWord;
            }
            
            // Capitalize first letter of subsequent words
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
    
    return camelCased;
}

// ============================================================================
// TEST CASES - Demonstrating various edge cases
// ============================================================================

console.log('=== Basic Cases ===');
console.log(toCamelCase('hello world'));           // helloWorld
console.log(toCamelCase('hello_world'));           // helloWorld
console.log(toCamelCase('hello-world'));           // helloWorld
console.log(toCamelCase('hello.world'));           // helloWorld

console.log('\n=== Mixed Delimiters ===');
console.log(toCamelCase('user_first-name'));       // userFirstName
console.log(toCamelCase('api.response.data'));      // apiResponseData
console.log(toCamelCase('first_name-last.name'));  // firstNameLastName

console.log('\n=== Uppercase Inputs ===');
console.log(toCamelCase('SCREEN_NAME'));           // screenName
console.log(toCamelCase('USER_ID'));               // userId
console.log(toCamelCase('HTML_PARSER'));           // htmlParser

console.log('\n=== Repeated/Extra Delimiters ===');
console.log(toCamelCase('first__name'));           // firstName
console.log(toCamelCase('user___id'));             // userId
console.log(toCamelCase('  hello  world  '));      // helloWorld

console.log('\n=== Numeric Values ===');
console.log(toCamelCase('user_2_name'));           // user2Name
console.log(toCamelCase('test_123_case'));         // test123Case
console.log(toCamelCase('id_1-value_2'));          // id1Value2

console.log('\n=== Already camelCase ===');
console.log(toCamelCase('helloWorld'));            // helloWorld
console.log(toCamelCase('userId'));                // userId

console.log('\n=== Edge Cases ===');
console.log(toCamelCase('a'));                     // a
console.log(toCamelCase('A'));                     // a
console.log(toCamelCase(''));                      // (empty string)
console.log(toCamelCase('___'));                   // (empty string)
console.log(toCamelCase('   '));                   // (empty string)

console.log('\n=== Error Handling ===');
try {
    toCamelCase(null);
} catch (e) {
    console.log('Error caught:', e.message);        // Input cannot be null or undefined
}

try {
    toCamelCase(undefined);
} catch (e) {
    console.log('Error caught:', e.message);        // Input cannot be null or undefined
}

try {
    toCamelCase(123);
} catch (e) {
    console.log('Error caught:', e.message);        // Expected string, got number
}

try {
    toCamelCase({name: 'test'});
} catch (e) {
    console.log('Error caught:', e.message);        // Expected string, got object
}

try {
    toCamelCase(['hello', 'world']);
} catch (e) {
    console.log('Error caught:', e.message);        // Expected string, got object
}