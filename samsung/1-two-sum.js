/**
 * @description brute force appraoch
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumS1 = function(nums, target) {
  if (nums.length === 2) return [0, 1];
  
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};

/**
 * @description optimized appraoch
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumS2 = function(nums, target) {
  const map = new Map;
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
};