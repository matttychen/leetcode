/**
 * @description brute force
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
      for (let j = i+1; j < n; j++) {
          console.log(i, j);
          let k = Math.pow(i, 2) + Math.pow(j, 2);
          if (isPerfectSquare(k, n)) count += 2;
      }
  }
  return count;
};

function isPerfectSquare(x, n) {
  let y = Math.floor(Math.sqrt(x));
  return y*y === x && y <= n;
}