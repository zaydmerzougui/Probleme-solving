/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
    let num = `${x}`;
  let i = 0;
  let j = num.length - 1;
    
  if (x < 10&&x>=0) return true;
  
    while (i< j) {
      if (num[i] !== num[j]) {
        return false;
      }
      i++;
      j--;
    }
  
   return true
    
};