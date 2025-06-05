/**
 * Removes all vowels from the input string.
 * @param {string} str - The input string to process.
 * @returns {string} The input string with all vowels removed.
 */
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}