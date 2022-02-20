/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  const length = nums.length;
const rotate = k % length;
const rotateNums = nums.splice(length - rotate);

nums.splice(0, 0, ...rotateNums);
};