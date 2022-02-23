/**
 * @description dynamic iterative approach
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  const steps = [cost[0], cost[1]];
  
  for (let i = 2; i <= cost.length; i++) {
      const currentCost = i === cost.length ? 0 : cost[i];
      steps[i] = Math.min(steps[i - 2], steps[i - 1]) + currentCost;
  }
      
  return steps[cost.length];
};


/**
 * @description recursive + memo approach
 * @param {number[]} cost
 * @return {number}
 */

const memo = [];

var minCostClimbingStairs = function(cost) {
    return helper(cost, cost.length);
};

const helper = (cost, index) => {
    if (index <= 1) return 0;
    if (memo[index] !== undefined) return memo[index];
    
    const downOne = cost[index - 1] + helper(cost, index - 1);
    const downTwo = cost[index - 2] + helper(cost, index - 2);
    memo[index] = Math.min(downOne, downTwo);
    
    return memo[index];
}
    