/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (array) {
 let existingNumbers = [];
    for(let i = 0; i < array.length; i++) {
       if(existingNumbers[array[i]] === 1) {
	            return true;
	        } else {
 	            existingNumbers[array[i]] = 1;
 	        }
 	    }
 	    return false;
}