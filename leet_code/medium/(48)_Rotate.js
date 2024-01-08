

const rotate = (matrix) => {

    let rowLen = matrix[0].length
    for(let i = 0;i < matrix.length;i++) {
        for(let j = i + 1;j < matrix[i].length;j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }        
    }
    
    let halfWay = Math.floor(matrix.length / 2)

    for(let i = 0;i < matrix.length;i++) {
        for(let j = matrix[i].length - 1;j >= halfWay;j--) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][rowLen - j - 1]
            matrix[i][rowLen - j - 1] = temp
            console.log(temp)
        }        
    }
}

rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])