/**
 * @description brute force approach
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let maxSum = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
      let currentSum = 0;
      for (let j = i; j < nums.length; j++) {        
          currentSum += nums[j];
          maxSum = Math.max(currentSum, maxSum);
          if (nums[j] > 0 && currentSum < 0) break;
      }
  }
  
  return maxSum;
};