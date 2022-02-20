/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {        
      return solutionRecursiveHelper(n, isBadVersion, 1, n);
  };
};

var solutionRecursiveHelper = (n, isBadVersion, startIndex, endIndex) => {
  if (startIndex === endIndex) return startIndex;
  
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  
  if (isBadVersion(middleIndex)) {
      return solutionRecursiveHelper(n, isBadVersion, startIndex, middleIndex);
  }
  if (!isBadVersion(middleIndex)) {
      return solutionRecursiveHelper(n, isBadVersion, middleIndex + 1, endIndex);
  }
      
}