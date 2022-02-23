/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  
  return searchInsertHelper(nums, target, 0, nums.length - 1);
};

const searchInsertHelper = (nums, target, startIndex, endIndex) => {
  if (startIndex === endIndex) return startIndex;
  
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
  if (nums[middleIndex] === target) return middleIndex;
  if (nums[middleIndex] < target) {
      return searchInsertHelper(nums, target, middleIndex + 1, endIndex);
  }
  if (nums[middleIndex] > target) {
      return searchInsertHelper(nums, target, startIndex, middleIndex);
  }
}