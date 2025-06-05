/**
 * Filters out all strings from an array and returns a new array with the remaining elements.
 * @param {Array} l - The input array containing numbers and strings.
 * @returns {Array} A new array with only the numbers from the input array.
 */
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(v) { return typeof v === 'number'; });
}

// Tests from Codewars
console.assert(JSON.stringify(filter_list([1,2,'a','b'])) === JSON.stringify([1,2]), 'For input [1,2,"a","b"]');
console.assert(JSON.stringify(filter_list([1,'a','b',0,15])) === JSON.stringify([1,0,15]), 'For input [1,"a","b",0,15]');
console.assert(JSON.stringify(filter_list([1,2,'aasf','1','123',123])) === JSON.stringify([1,2,123]), 'For input [1,2,"aasf","1","123",123]');
