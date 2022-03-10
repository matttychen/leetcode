/**
 * @description recursive approach
 * @param {number} n
 * @return {number}
 */
 var fibS1 = function(n) {
  return fibHelper(n);
};

const fibHelper = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fibHelper(n - 1) + fibHelper(n - 2);
}

/**
 * @description dynamic recursive approach
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  return fibHelper(n, []);
};

const fibHelper = (i, mem) => {
  if (i === 0 || i === 1) return i;
  
  if (mem[i] === undefined) {
      mem[i] = fibHelper(i - 1, mem) + fibHelper(i - 2, mem);
  }
  
  return mem[i];
}

/**
 * @description dynamic iterative approach
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  const memo = [0, 1];
  
  for (let i = 2; i <= n; i++) {
      memo.push(memo[i - 1] + memo[i - 2]);
  }
  
  return memo[n];
};