
/*

Determine if a 9 x 9 Sudoku board is valid. Only 
the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain
the digits 1-9 without repetition.

*/


const validSudoku = (board) => {

    for(let i = 0;i < board.length;i++) {

        const _row = new Set()
        const _column = new Set()
        const _box = new Set()

        for(let j = 0;j < board[i].length;j++) {

            const row = board[i][j]
            const column = board[j][i]
            const box = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]

            if(row !== '.') {
                if(_row.has(row)) {
                    return false
                }
            }
            if(column !== '.') {
                if(_column.has(column)) {
                    return false
                }
            }if(box !== '.') {
                if(_box.has(box)) {
                    return false
                }
            }
            _row.add(row)
            _column.add(column)
            _box.add(box)
        }
    }
    return true
}

console.log(validSudoku(
    [
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]
]
  ))

















//REDO 2

// for(let i = 0;i < board.length;i++) {

//     const _row = new Set()
//     const _column = new Set()
//     const _box = new Set()

//     for(let j = 0;j < board[i].length;j++) {

//         const row = board[i][j]
//         const column = board[j][i]
//         const box = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]
//         console.log({row,column,box})

//         if(row !== '.') {
//             if(_row.has(row)) {
//                 return false
//             }
//         }
//         if(column !== '.') {
//             if(_column.has(column)) {
//                 return false
//             }
//         }
//         if(box !== '.') {
//             if(_box.has(box)) {
//                 return false
//             }
//         }
//             _row.add(row)
//             _column.add(column)
//             _box.add(box)
//     }
// }
// return true

  // for(let i = 0;i < board.length;i++) {

  //   let row = new Set()
  //   let column = new Set()
  //   let box = new Set()

  //   for(let j = 0;j < board.length;j++) {
  //     let _row = board[i][j]
  //     let _column = board[j][i]
  //     let _box = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]
     
  //     if(_row !== '.') {
  //       if(row.has(_row)) {
  //         return false
  //       }
  //       row.add(_row)
  //     }

  //     if(_column !== '.') {
  //       if(column.has(_column)) {
  //         return false
  //       }
  //       column.add(_column)
  //     }
      
  //     if(_box !== '.') {
  //       if(box.has(_box)) {
  //         return false
  //       }
  //       box.add(_box)
  //     }
  //   }
  // }
  // return true







// const validSudoku = (board) => {
//     for (let i = 0; i < 9; i++) {
//         let row = new Set(),
//             col = new Set(),
//             box = new Set();
    
//         for (let j = 0; j < 9; j++) {
//           let _row = board[i][j];
//           //the column values are got here by reversing the value of the 
//           //indexs
//           let _col = board[j][i];
//           /*
          
//           start the box section by tracking what j is doing. Until j hits index 3
//           the row will remain 0. Once j hits three Math.floor(j/3) goes to 1. The row 
//           increments up by one every 3 movements by j. After the first row is done
//           the first box in the upper left has been checked. 
          
//           */
//          //rowStart changes which level of boxes we are checking. If i is less than 
//          //3 we are checking the first three boxes going left to right. If i is 3 - 5
//          //we are checking the second three boxes left to right etc. 
//           let rowStart = 3*Math.floor(i/3)
//           /*
//           rowModifier changes the row level within the box we are checking. Once 
//           j is 3 - 5 for example, the row within the first box goes down one level
//           */
//           let rowModifier = Math.floor(j/3)
//           /*
//           columnStart changes which box we start at when checking a row of boxes for
//           example, when i is 1 1%3 is equal to 1, this times 3 is 3. Because weve gone
//           through the first row, the next box we check is three spots into the row. 
//           */
//           let columnStart = 3*(i%3)
//           /*
//           columnModifier changes how far in to the box we are checking to go. Following the
//           last example in column start, when j = 1 we go three spots into the current row and 
//           then one more. 
//           */
//           let columnModifier = (j%3)
          
//           // The movement of the boxes through this iteration is left to right 
//           //starting at top left ending on bottom right. 
//           let _box = board[rowStart + rowModifier][columnStart + columnModifier]
//           // let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
//           console.log({_box})
          
//           if (_row != '.') {
//             if (row.has(_row)) return false;
//             row.add(_row);
//           }
//           if (_col != '.') {
//             if (col.has(_col)) return false;
//             col.add(_col);
//           }
          
//           if (_box != '.') {
//             if (box.has(_box)) return false;
//             box.add(_box);
//           } 
//         }
//       }
//       return true
// }

// // console.log(Math.floor(0%3))
// // console.log(1%3)

// console.log(validSudoku(
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// ))

//FOUND SOLUTION


//    const columns =  createColumns(board)
//    const squares = createSquares(board)
// }

// const createColumns = (board) => {
//     let rowNumber = 0
//     let changeOvers = [3,6]
//     let columns = [[],[],[],[],[],[],[],[],[]]
//     let squares = [[],[],[],[],[],[],[],[],[]]

//     while(rowNumber < 9) {
//         for(let i = 0;i < board.length;i++) {
//             columns[i].push(board[rowNumber][i])

//         }
//         rowNumber++
//     }
//     return columns
// }

// const createSquares = (board) => {
//     let squareCount = 0
//     let squares = []

//     while(squareCount < 9) {
//         let first = board[squareCount].slice(0,3)
//         let second = board[squareCount].slice(3,6)
//         let third = board[squareCount].slice(7,board[board[squareCount].length - 1])

        
        
//     }

// let valid = true
    // const validNumbers = [1,2,3,4,5,6,7,8,9]
    
    // grid.forEach(row => {
    //     const set = new Set()
    //     row.forEach(item => {
    //         set.has(item) && item !== '.' ? valid = false : set.add(item)
    //     })
    // })
    // // console.log(valid)
    // const columnGrid = createColumnGrid(grid)
    // // const squareGrid = createSquareGrid(grid)

// const columnStart = [0,9,18,27,36,45,54,63,72,81]
    // const columnIndexs = [columnStart]
    // while(columnIndexs.length < 9) {
    //     const test = columnIndexs[columnIndexs.length - 1].map(item => item + 1)
    //     columnIndexs.push(test)
    // }
    // console.log(columnIndexs)
    // columnIndexs.map((row,index) => {
    //     return row.map(item => {
    //         console.log(index,item)
    //         return grid[index][item]
    //     })
    // })
    // console.log(columnIndexs)

    // test.forEach((item,index) => {
    //     console.log(index)
    // })
    // const columns = [columnStart]
    // while(columns.length < 9) {
    //     const newColumn = 
    //     columns.push()
    // }

// const columnIndexs = [0,9,18,27,36,45,54,63,72,81]
//     const columns = [columnIndexs]
//     while(columns.length < 9) {
//         const newColumn = columns[columns.length - 1].map((item) => item + 1)
//         columns.push(newColumn)
//     }


// console.log(grid)
    // let columns = []
    // let rowNumber = 0
    // while(rowNumber < 9) {
    //     let column = []
    //     let columnIndex = 0
    //     while(columnIndex < 9) {
    //         column.push(grid[rowNumber][columnIndex])
    //    }
    // }
    // // console.log(test)