/**
 * Checks if a string is an isogram (a word with no repeating letters, case insensitive).
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is an isogram, false otherwise.
 */
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// Tests from Codewars
console.assert(isIsogram("Dermatoglyphics") === true, "Dermatoglyphics should be true");
console.assert(isIsogram("isogram") === true, "isogram should be true");
console.assert(isIsogram("aba") === false, "aba should be false");
console.assert(isIsogram("moOse") === false, "moOse should be false");
console.assert(isIsogram("isIsogram") === false, "isIsogram should be false");
console.assert(isIsogram("") === true, "empty string should be true");
