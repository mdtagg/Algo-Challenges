

const setZeroes = (matrix) => {

    let visited = new Set()

    for(let i = 0;i < matrix.length;i++) {
        let zero = false
        for(let j = 0;j < matrix[0].length;j++) {
            if(zero === true && matrix[i][j] !== 0) matrix[i][j] = 0
            else if(matrix[i][j] === 0 && !visited.has(j)) {

                let row = 0
                let col = j
                visited.add(col)

                while(row < matrix.length) {
                    matrix[row][col] = 0
                    row++
                }
                col = 0
                while(col < j) {
                    matrix[i][col] = 0
                }
                zero = true
            }
        }
    }
}

setZeroes(
    [[1,1,1],[1,0,1],[1,1,1]]
)

/*
const setZeros = (matrix) => {

    let visited = new Map()

    for(let i = 0;i < matrix.length;i++) {
        let zero = false
        for(let j = 0;j < matrix[0].length;j++) {
            if(zero === true && matrix[i][j] !== 0) matrix[i][j] = 0
            else if(matrix[i][j] === 0 && !visited.get(i)) {

                let row = 0
                let col = j

                while(row < matrix.length) {
                    if(row > i) {
                        visited.get(row) ? 
                        visited.get(row).add(col) : 
                        visited.set(row,new Set().add(col))
                    }
                    matrix[row][col] = 0
                    row++
                }
                zero = true
            }
        }
    }
}

[1,1,1],
        [1,0,1],
        [1,1,1]
*/