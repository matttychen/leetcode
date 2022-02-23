/**
 * @description brute force
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  const indicesOfZero = [];

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] === 0) {
              indicesOfZero.push({rowIndex: i, columnIndex: j});
          }
      }
  }
  
  indicesOfZero.forEach((coordinate) => {
      setColumnsAndRowsToZero(matrix, coordinate);
  })
};

const setColumnsAndRowsToZero = (matrix, coordinate) => {
  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][coordinate.columnIndex] === 0) continue;
      matrix[i][coordinate.columnIndex] = 0;
  }
  for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[coordinate.rowIndex][j] === 0) continue;
      matrix[coordinate.rowIndex][j] = 0;
  }
}