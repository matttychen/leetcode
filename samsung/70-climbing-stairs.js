/**
 * @description brute force, recursive approach
 * @param {number} n
 * @return {number}
 */
 var climbStairsS1 = function(n) {
  const distictPaths = climbStairsHelperS1(0, n);
  return distictPaths;
};

var climbStairsHelperS1 = (i, n, paths) => {
  if (paths[i] !== undefined) return paths[i];
  if (i > n) return 0;
  if (i === n) return 1;
  
  paths[i] = climbStairsHelperS1(i + 1, n, paths) + climbStairsHelperS1(i + 2, n, paths);
  return paths[i];
}

/**
 * @description recursive approach with memoization
 * @param {number} n
 * @return {number}
 */
 var climbStairsS2 = function(n) {
  const distictPaths = climbStairsHelperS2(0, n, []);
  return distictPaths;
};

var climbStairsHelperS2 = (i, n, paths) => {
  if (paths[i] !== undefined) return paths[i];
  if (i > n) return 0;
  if (i === n) return 1;
  
  paths[i] = climbStairsHelperS2(i + 1, n, paths) + climbStairsHelperS2(i + 2, n, paths);
  return paths[i];
}

/**
 * @description dynamic iterative approach
 * @param {number} n
 * @return {number}
 */
 var climbStairsS3 = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  const distinctPaths = [0, 1, 2]
  
  for (let i = 3; i <= n; i++) {
      distinctPaths[i] = distinctPaths[i - 1] + distinctPaths[i - 2];
  }
  
  return distinctPaths[n];
};

