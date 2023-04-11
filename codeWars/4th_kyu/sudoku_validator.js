//validate a sudoku board

function validSolution(board) {

    if(rowCheck(board) && columnCheck(board) && boxCheck(board)) return true
    return false
}

const rowCheck = (board) => {
    for(let i = 0;i < board.length;i++) {
        if(!board[i].slice().sort().join('').includes('123456789')) {
            return false
        }else if(i === 8) {
            return true
        }
    }
}

const columnCheck = (board) => {
    let count = 0
    let columns = []
    while(count < board.length) {
        let column = []
        for(let i = 0;i < 9;i++) {
            column.push(board[i][count]) 
            if(i === 8) {
                columns.push(column)
            }
        }
        count++
    }
    return rowCheck(columns)
}

const boxCheck = (board) => {
    let count = 0
    let boxes = []
    while(count <= 6) {
        let box = []
        for(let i = 0;i < board.length;i++) {
            box.push(...board[i].splice(0,3))
            if(i === 2 || i === 5 || i === 8) {
                boxes.push(box)
                box = []
            }
        }
        count+=3
    }
    return rowCheck(boxes)
}

validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]])

// BEST SOLUTION FOUND 

function equals45(n){
    return n == 45;
  }
  
  function validSolution(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }

/*
WHAT I LEARNED 

-you have to use .slice() when using .sort() on arrays within arrays because
if you dont it will sort the original array in place and there is just about 
nothing that I tried that will prevent that from happening, even Array.from 
in a scope a layer up. 

-placing new variables at different layers and pushing destructured array 
values into them can simplify getting the nested array you want. 
*/




//CODE GRAVEYARD
                // let rowCount = 2
                // let rows = []
                // let columns = []
                // let boxes = []
            
                // while(board[8].length > 0) {
                //     let columnBox = []
                //     let box = []
            
                //     for(let i = 0;i < 9;i++) {
                //         columnBox.push(board[i][rowCount])
                //         if(rows.length < 9) {
                //            rows.push(board[i].slice(0,board[i].length))
                //         }
                //         if(i === 8) {
                //             columns.push(columnBox)
                //             columnBox = []
                //         }
                        
                //         if(rowCount === 0) {
                //             box.push(...board[i].splice(0,3))
                //         }
                //         if(rowCount === 0 && (i === 2 || i === 5 || i === 8)) {
                //             boxes.push(box)
                //             box = []
                //         }
                //         if(rowCount === 0 && i === 8) {
                //             rowCount += 2
                //         }
                        
                //     }
                //     rowCount--
                // }
                // console.log(columns)
                // console.log(boxes)
                // console.log(rows)