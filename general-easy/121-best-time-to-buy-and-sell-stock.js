/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  if (prices.length === 1) return 0;
  if (prices.length === 2) return Math.max(0, prices[1] - prices[0]);
  
  let smallIndex = 0;
  let largeIndex = 0;
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
      if (i < prices.length - 1 && prices[i] < prices[smallIndex]) {
          smallIndex = i;
          largeIndex = i;
      } 
      else if (prices[i] > prices[largeIndex]) {
          largeIndex = i;
      }
      
      maxProfit = Math.max(maxProfit, prices[largeIndex] - prices[smallIndex]);
  }
  
  return maxProfit;
};