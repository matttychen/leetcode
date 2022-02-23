const memo = [];

/**
 * recursive + memo approach
 * @param {number[]} nums
 * @return {number}
 */
var robS1 = function(nums) {
    return helper(0, nums);
};

const helper = (i, nums) => {
    if (i >= nums.length) return 0;
    if (memo[i] !== undefined) return memo[i];
    
    const result = Math.max(helper(i + 1, nums), helper(i + 2, nums) + nums[i]);
    
    memo[i] = result;
    return result;
}

/**
 * dp approach
 * @param {number[]} nums
 * @return {number}
 */
var robS2 = function(nums) {
  if (nums.length === 0) return 0;

  let length = nums.length;
    let max = [];
    max[length] = 0;
    max[length - 1] = nums[length - 1]
    
    for (let i = length - 2; i >= 0; i--) {
        max[i] = Math.max(max[i + 1], max[i + 2] + nums[i]);
    }
    
    return max[0];
};