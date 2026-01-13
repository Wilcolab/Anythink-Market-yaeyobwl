function toKebabCase(input) {
    // Input validation
    if (input === null || input === undefined) {
        return '';
    }
    if (typeof input !== 'string') {
        input = String(input);
    }

    // Convert to lowercase and replace spaces, underscores, and camelCase boundaries with hyphens
    const kebabCase = input
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
        .replace(/[_\s]+/g, '-') // Replace spaces and underscores with hyphens
        .toLowerCase() // Convert to lowercase
        .replace(/-+/g, '-') // Collapse multiple hyphens into a single hyphen
        .replace(/^-|-$/g, ''); // Trim leading and trailing hyphens

    return kebabCase;
}

// Example inputs and expected outputs
console.log(toKebabCase('userName')); // user-name
console.log(toKebabCase('SCREEN_NAME')); // screen-name
console.log(toKebabCase('user_id')); // user-id
console.log(toKebabCase('  multiple   spaces  ')); // multiple-spaces
console.log(toKebabCase(null)); // ''
console.log(toKebabCase(undefined)); // ''
console.log(toKebabCase(123)); // 123
console.log(toKebabCase('Special@Characters!')); // special-characters