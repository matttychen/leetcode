/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
      i -= 1;
  }
  
  if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
          j -= 1;
      }
      swap(nums, i, j);
  }
  
  reverse(nums, i + 1);
};

const swap = (nums, indexOne, indexTwo) => {
  const temp = nums[indexOne];
  nums[indexOne] = nums[indexTwo];
  nums[indexTwo] = temp;
}

const reverse = (nums, start) => {
  let i = start;
  let j = nums.length - 1;
  
  while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
  }
}
