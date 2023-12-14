

const onesMinusZeros = (grid) => {

    let row = grid.length;
    let col = grid[0].length;
    let result = Array.from({ length: row }, () => Array(col).fill(0));
    let colMap = new Map()

    for(let i = 0;i < grid.length;i++) {

        let onesRow = 0
        let zerosRow = 0
        
        for(let k = 0;k < grid[i].length;k++) {
            if(grid[i][k] === 1) onesRow++
            else zerosRow++
        }
        for(let j = 0;j < grid[i].length;j++) {
            if(colMap.get(j) === undefined) colMap.set(j,colNums(grid,j))
            const [onesCol, zerosCol] = colMap.get(j)
            result[i][j] = onesRow + onesCol - zerosRow - zerosCol
        }
    }
    return result
}

function colNums(grid,j) {

    let i = 0
    let onesCol = 0
    let zerosCol = 0

    while(i < grid.length) {
        if(grid[i][j] === 1) onesCol++;
        else zerosCol++
        i++
    }
    return [ onesCol, zerosCol ]
}

onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]])