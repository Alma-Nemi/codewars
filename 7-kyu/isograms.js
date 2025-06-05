/**
 * Checks if a string is an isogram (a word with no repeating letters, case insensitive).
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is an isogram, false otherwise.
 */
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// Tests from Codewars
const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("isIsogram", function() {
  it("Sample tests", function() {
    tester("Dermatoglyphics", true);
    tester("isogram", true);
    tester("aba", false);
    tester("moOse", false);
    tester("isIsogram", false);
    tester("", true);
  });
  
  function tester(input, expected) {
    assert.strictEqual(isIsogram(input), expected, `Failed for input: "${input}"\n`);
  }
});
