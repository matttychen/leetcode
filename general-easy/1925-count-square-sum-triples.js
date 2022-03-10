/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
  const N = n ** 2
  let result = 0
  
  
  for (let a = 1; a < n; a++) {
      const A = a ** 2
      for (let b = 1 + a; b < n; b++) {
          const B = b ** 2
          const C = A + B
          if (C <= N) {
              const c = Math.sqrt(C)
              if (Number.isInteger(c))
                  result += 2
          }
      }
  }
  
  return result
}