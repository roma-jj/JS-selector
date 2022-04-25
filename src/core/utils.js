export function capitalize(string) {
    if (typeof string !== 'string') {
        return '';
    }

    // In case that the string does not have char with index 0:
    // 1. string.charAt(0) => in case that the string does not
    // have char with index 0 => return '' (empty string);
    // 2. string[0] is a modern way, but => return undefined;

    return string.charAt(0).toUpperCase() + string.slice(1);
}
