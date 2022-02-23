/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  nums.sort();
  
  const middleIndex = Math.floor(nums.length / 2);
  
  return nums[middleIndex];
};