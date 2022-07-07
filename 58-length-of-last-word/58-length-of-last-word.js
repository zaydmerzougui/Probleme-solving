/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
   let len = s.length - 1;
  let counter = 0;
  for (let i = len; i >= 0; i--) {
    if (s.charAt([i]) !== " ") {
      counter++;
    } else if (counter != 0) {
      break;
    }
  }
  return(counter);
};
