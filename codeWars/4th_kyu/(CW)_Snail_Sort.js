

const snailSort = (array) => {

  let result = [];
  let [row,col] = [0,0]
  let test = 0

  let prevRow = array[row - 1]
  let prevCol = array[col - 1]
  let nextCol = array[col + 1]
  let nextRow = array[row + 1]
  

  while(test > -1) {

    if(col !== 'NaN') {
      col++;
      result.push(array[row][col]);
    }
    else if(nextRow) {
      nextRow++;
      row++;
    }
  }

}

snailSort([
  [1,2,3],
  [8,9,4],
  [7,6,5]
])

