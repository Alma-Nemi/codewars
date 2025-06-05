/**
 * Returns the product of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

// Tests from Codewars
console.assert(multiply(2, 3) === 6, "2 * 3 should be 6");
console.assert(multiply(5, 0) === 0, "5 * 0 should be 0");