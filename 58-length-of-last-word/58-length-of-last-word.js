/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let clean = s.trim().split(" ");
  let counter = 0;
  for (let i = 0; i < clean[clean.length - 1].length; i++) {
    counter += 1;
  }
  return counter
};