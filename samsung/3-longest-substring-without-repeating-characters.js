/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringS1 = function(s) {
  let maxLongestLength = 0;
  let currentSubstring = '';
  
  for (let i = 0; i < s.length; i++) {
      const indexOfMatching = currentSubstring.indexOf(s[i]);
      if (indexOfMatching !== -1) {
          currentSubstring = currentSubstring.substring(indexOfMatching + 1, i) + s[i];
          continue;
      }

      currentSubstring += s[i];
      maxLongestLength = Math.max(maxLongestLength, currentSubstring.length);
  }
      
  return maxLongestLength;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringS2 = function(s) { 
  let maxLength = 0;
  let set = new Set();
  let startingIndex = 0;
  let currentIndex = 0;
  
  while (currentIndex < s.length) {
      if (!set.has(s[currentIndex])) {
          set.add(s[currentIndex]);
          currentIndex += 1;
          maxLength = Math.max(set.size, maxLength);
          continue;
      }
      
      set.delete(s[startingIndex]);
      startingIndex += 1;
  }
  
  return maxLength;
};