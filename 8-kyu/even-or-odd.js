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

// Tests from Codewars
console.assert(evenOrOdd(2) === "Even", "2 should be Even");
console.assert(evenOrOdd(7) === "Odd", "7 should be Odd");
console.assert(evenOrOdd(-42) === "Even", "-42 should be Even");
console.assert(evenOrOdd(-7) === "Odd", "-7 should be Odd");
console.assert(evenOrOdd(0) === "Even", "0 should be Even");