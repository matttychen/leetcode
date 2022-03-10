/**
 * @param {number[]} arr
 * @return {number}
 */
 var fixedPoint = function(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  
  let result = arr.length;
  
  while (leftIndex <= rightIndex) {
      console.log(leftIndex, rightIndex);
      let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
      
      if (middleIndex < arr[middleIndex]) {
          rightIndex = middleIndex - 1;
      } else if (middleIndex > arr[middleIndex]) {
          leftIndex = middleIndex + 1;
      } else {
          result = Math.min(result, middleIndex);
          rightIndex = middleIndex - 1;
      }
  }
  
  
  if (result === arr.length) return -1;
  
  return result;
};