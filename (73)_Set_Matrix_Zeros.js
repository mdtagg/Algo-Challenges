

var setZeroes = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(matrix[i][j]==0){
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(dummyRow[i] == 0 || dummyCol[j] == 0 ){
                matrix[i][j]=0;
            }
        }
    }
};

setZeroes(
    [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
)

/*
const setZeroes = (matrix) => {

    let rowSet = new Set()
    let colSet = new Set()

    for(let i = 0;i < matrix.length;i++) {

        for(let j = 0;j < matrix[0].length;j++) {
            if(matrix[i][j] === 0) {
                if(rowSet.has(i) || colSet.has(j)) continue;

                let row = 0
                let col = j
                colSet.add(col)

                while(row < matrix.length) {
                    matrix[row][col] = 0
                    row++
                }
                col = 0
                rowSet.add(i)
                while(col < matrix[i].length) {
                    if(matrix[i][col] !== 0) {
                        matrix[i][col] = 0
                    }
                    else if(!colSet.has(col)) {
                        colSet.add(col)
                        let row = 0

                        while(row < matrix.length) {
                            matrix[row][col] = 0
                            row++
                        }
                        col++
                        continue
                    }
                    col++
                }
            }
        }
    }
    return matrix
}

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