/**
 * @description brute force approach
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArrayS1 = function(nums) {
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

/**
 * dynamic programming approach
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArrayS2 = function(nums) {
  if (nums.length === 1) return nums[0];
  
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      let num = nums[i];
      currentSum = Math.max(num, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
};