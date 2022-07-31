/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
      let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let midPoint = Math.floor((start + end) / 2);
    if (nums[midPoint] === target) return midPoint;
    if (nums[midPoint] < target && nums[midPoint + 1] > target)
      return midPoint + 1;
    else if (target > nums[end]) return end+1 ;
      else if (target<nums[start])return start
    else if (nums[midPoint] < target) {
      start = midPoint + 1;
    } else if (nums[midPoint] > target) {
      end = midPoint - 1;
    }
  }
};