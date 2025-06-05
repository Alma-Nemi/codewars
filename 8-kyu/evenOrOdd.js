/**
 * Determines if a number is even or odd.
 * @param {number} number - The number to check.
 * @returns {string} "Even" if the number is even, "Odd" if the number is odd.
 */
function evenOrOdd(number) {
     if (number % 2 === 0) {
          return "Even";
     }
     else {
          return "Odd";
     }
}