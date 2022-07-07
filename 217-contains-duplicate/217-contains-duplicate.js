/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
let i =0;
    let set=new Set()
    while(i<nums.length){
        if(set.has(nums[i])){
            return true
        }else{
            set.add(nums[i])
        }
        i++
        
    }
    return false
}