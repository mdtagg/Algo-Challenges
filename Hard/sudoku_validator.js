function validSolution(board) {
    let rowCount = 2
    let rows = []
    let columns = []
    let boxes = []

    while(board[8].length > 0) {
        let columnBox = []
        let box = []

        for(let i = 0;i < 9;i++) {
            columnBox.push(board[i][rowCount])
            if(rows.length < 9) {
               rows.push(board[i].slice(0,board[i].length))
            }
            if(i === 8) {
                columns.push(columnBox)
                columnBox = []
            }
            
            if(rowCount === 0) {
                box.push(...board[i].splice(0,3))
            }
            if(rowCount === 0 && (i === 2 || i === 5 || i === 8)) {
                boxes.push(box)
                box = []
            }
            if(rowCount === 0 && i === 8) {
                rowCount += 2
            }
            
        }
        rowCount--
    }
    console.log(columns)
    console.log(boxes)
    console.log(rows)
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