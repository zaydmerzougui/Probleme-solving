/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let clean = s.trim().split(" ");
  
  return clean[clean.length-1].length
};