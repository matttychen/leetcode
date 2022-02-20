/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  return searchRecursiveHelper(
      nums,
      target,
      0,
      nums.length - 1
  );
};

var searchRecursiveHelper = (nums, target, startIndex, endIndex) => {
  // no match
  if (startIndex > endIndex) return -1;
  
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
  // matches
  if (nums[middleIndex] === target) return middleIndex;
  
  // search again
  if (nums[middleIndex] > target) {
      return searchRecursiveHelper(nums, target, startIndex, middleIndex - 1);
  }
  if (nums[middleIndex] < target) {
      return searchRecursiveHelper(nums, target, middleIndex + 1, endIndex);
  }  
}
