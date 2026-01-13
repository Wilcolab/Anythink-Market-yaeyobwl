
/**
 * Converts a string to camelCase format.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the string
 * 
 * @example
 * toCamelCase('hello-world') // returns 'helloWorld'
 * toCamelCase('hello_world') // returns 'helloWorld'
 * toCamelCase('hello world') // returns 'helloWorld'
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[\s_-]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
}