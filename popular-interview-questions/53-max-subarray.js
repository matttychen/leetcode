/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let currentMax = nums[0];
  let currentSum = 0;
  
  nums.forEach((num) => {
      currentSum += num;
      
      if (currentSum > currentMax) {
          currentMax = currentSum;
      }
      
      if (currentSum < 0) {
          currentSum = 0;
      }
  })
  
  return currentMax;
};