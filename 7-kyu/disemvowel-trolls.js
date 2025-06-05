/**
 * Removes all vowels from the input string.
 * @param {string} str - The input string from which vowels will be removed.
 * @returns {string} The input string with all vowels removed (both lowercase and uppercase).
 */
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Tests from Codewars
console.assert(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!", 
  "Vowels should be removed");
console.assert(disemvowel("No offense but,\nYour writing is among the worst I've ever read") === 
  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", "Vowels should be removed with newlines");
console.assert(disemvowel("What are you, a communist?") === "Wht r y,  cmmnst?", 
  "Vowels and punctuation should be handled");