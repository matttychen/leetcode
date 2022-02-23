/**
 * @description recursive approach
 * @param {number} n
 * @return {number}
 */
 var tribonacciS1 = function(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

/**
 * @description dynamic iterative approach
 * @param {number} n
 * @return {number}
 */
 var tribonacciS2 = function(n) {
  const tribonacci_sequence = [0, 1, 1];
  
  for (let i = 3; i <= n; i++) {
      tribonacci_sequence[i] = tribonacci_sequence[i - 1] + tribonacci_sequence[i - 2] + tribonacci_sequence[i - 3];
  }
  
  return tribonacci_sequence[n];
};