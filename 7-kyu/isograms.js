/**
 * Checks if a string is an isogram (a word with no repeating letters).
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is an isogram, false otherwise.
 */
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}