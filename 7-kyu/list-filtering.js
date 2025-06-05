/**
 * Filters out all strings from an array and returns a new array with only numbers.
 * @param {Array} l - The array to filter (can contain non-negative integers and strings).
 * @returns {Array} A new array with only the numbers from the original array.
 */
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(v) { return typeof v === 'number'; });
}