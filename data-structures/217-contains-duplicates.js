/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const uniques = new Set();
  
  for (let i = 0; i < nums.length; i++) {
      if (uniques.has(nums[i])) return true;
      uniques.add(nums[i]);
  }
  
  return false;
};