

const spiralOrder = (matrix) => {
    if(matrix.length === 1) return matrix
    
    let result = []
    let count = matrix.length * matrix[0].length 

    let col = -1
    let row = 0
    let startRow = 0
    let startCol = 0
    let endCol = matrix[0].length - 1
    let endRow = matrix.length - 1

    while(count > 0) {

        for(let i = startCol;i <= endCol;i++) {
            result.push(matrix[row][++col])
            count--
        }
        endCol--
        if(count === 0) break

        for(let i = startRow;i < endRow;i++) {
            result.push(matrix[++row][col])
            count--
        }
        endRow--
        if(count === 0) break
        
        for(let i = endCol;i >= startCol;i--) {
            result.push(matrix[row][--col])
            count--
        }
        startCol++
        if(count === 0) break

        for(let i = endRow;i > startRow;i--) {
            result.push(matrix[--row][col])
            count--
        }
        startRow++
        if(count === 0) break

    }
    return result
}

function move() {
    
}

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])

/*
while(coords[1] <= maxCol) {
            let [row,column] = coords
            result.push(matrix[row][column])
            if(coords[1] !== maxCol) {
                coords[1]++
            }else {
                coords[0]++
                maxCol = 0
            }
            count--
        }
        while(coords[0] <= maxRow) {
            let [row,column] = coords 
            result.push(matrix[row][column])
            if(coords[0] !== maxRow) {
                coords[0]++
            }else {
                coords[1]--
                maxRow = 0
            }
            count--
        }
        while(coords[1] >= maxCol) {
            let [row,column] = coords 
            result.push(matrix[row][column])
            if(coords[1] !== 0) {
                coords[1]--
            }else {
                coords[0]--
                count--
                break
            }
            count--
        }
        // while(coords[0] < maxRow) {

        // }

if(matrix.length === 2) {
        matrix[1].reverse()
        return matrix[0].concat(matrix[1])
    }
const spiralOrder = (matrix) => {
    if(matrix.length === 1) return matrix
    if(matrix.length === 2) {
        matrix[1].reverse()
        return matrix[0].concat(matrix[1])
    }
    let newMatrix = new Array(matrix.length).fill(new Array(matrix[0].length).fill(0))
    let result = []
    let maxRow = matrix.length - 1
    let maxColumn = matrix[0].length - 1

    let coords = [0,0]
    while(newMatrix[coords[0]][coords[1]] === 0) {
        while(coords[1] !== maxColumn) {
            newMatrix[coords[0]][coords[1]] = matrix[coords[0]][coords[1]]
            result.push(matrix[coords[0]][coords[1]])
            coords[1]++
        }
    }

}
*/