/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let maxEnd = 0;
  let maxStart = 0;
  
  for (let i = 0; i < s.length; i++) {
      const oddLength = lpHelper(s, i, i);
      const evenLength = lpHelper(s, i, i + 1);
      
      const length = Math.max(evenLength, oddLength);
      if (length > maxEnd - maxStart) {
          maxStart = i - Math.floor((length - 1) / 2);
          maxEnd = i + Math.floor(length / 2);
      }
  }
  
  return s.substring(maxStart  , maxEnd + 1);
};

const lpHelper = (s, leftIndex, rightIndex) => {
  let left = leftIndex;
  let right = rightIndex;
  
  while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
  }
  
  return right - left - 1;
};