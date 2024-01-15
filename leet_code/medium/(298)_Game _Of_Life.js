

const gameOfLife = (board) => {

    const colLen = board.length
    const rowLen = board[0].length
    const newBoard = new Array(colLen)

    for(let i = 0;i < colLen;i++) {
        newBoard[i] = []
        for(let j = 0;j < rowLen;j++) {
            newBoard[i][j] = board[i][j]
        }
    }

    function getNeighbors(row,col) {
        let sum = 0
        if(row - 1 >= 0) {
            sum += newBoard[row - 1][col]
            if(col < rowLen - 1) sum += newBoard[row - 1][col + 1];
            if(col > 0) sum += newBoard[row - 1][col - 1];
        }
        if(row + 1 < colLen) {
            sum += newBoard[row + 1][col]
            if(col < rowLen - 1) sum += newBoard[row + 1][col + 1]
            if(col > 0) sum += newBoard[row + 1][col - 1]
        }
        if(col < rowLen - 1) sum += newBoard[row][col + 1]
        if(col > 0) sum += newBoard[row][col - 1]

        return sum 
    }
    
    for(let i = 0;i < board.length;i++) {
        for(let j = 0;j < board[0].length;j++) {
            let neighbors = getNeighbors(i,j)
            if(board[i][j] === 1) {
                if(neighbors < 2 || neighbors > 3) board[i][j] = 0;
            }
            else {
                if(neighbors === 3) board[i][j] = 1;
            }
        }
    }
    console.log(board)
}

gameOfLife([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
])

/*
const gameOfLife = (board) => {

    const colLen = board.length
    const rowLen = board[0].length
    const newBoard = new Array(colLen)

    for(let i = 0;i < colLen;i++) {
        newBoard[i] = new Array(rowLen).fill(0)
    }

    function getNeighbors(row,col) {
        let sum = 0
        if(row - 1 >= 0) {
            sum += board[row - 1][col]
            if(col < rowLen - 1) sum += board[row - 1][col + 1];
            if(col > 0) sum += board[row - 1][col - 1];
        }
        if(row + 1 < colLen) {
            sum += board[row + 1][col]
            if(col < rowLen - 1) sum += board[row + 1][col + 1]
            if(col > 0) sum += board[row + 1][col - 1]
        }
        if(col < rowLen - 1) sum += board[row][col + 1]
        if(col > 0) sum += board[row][col - 1]
        return sum 
    }
    
    for(let i = 0;i < board.length;i++) {
        for(let j = 0;j < board[0].length;j++) {
            let neighbors = getNeighbors(i,j)
            if(board[i][j] === 1) {
                newBoard[i][j] = 1
                if(neighbors < 2 || neighbors > 3) newBoard[i][j] = 0;
            }
            else {
                if(neighbors === 3) newBoard[i][j] = 1;
            }
        }
    }
    return newBoard
}


function getNeighbors(row,col) {
        console.log(board)
        let sum = 0
        let neighbors = {
            top: (board[row - 1] || 0),
            topRight: board[row - 1][col + 1] || 0,
            right:board[row][col + 1] || 0,
            downRight: board[row + 1][col + 1] || 0,
            down: board[row + 1][col] || 0,
            downLeft: board[row + 1][col - 1] || 0,
            left:board[row][col - 1] || 0,
            topLeft:board[row - 1][col - 1] || 0
        }

        for(let i in neighbors) {
            console.log(i)
        }
    }
*/