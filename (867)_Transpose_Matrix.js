

const transpose = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;
    let result = Array.from({ length: col }, () => Array(row).fill(0));
    
    for (let i = 0; i < col; ++i) {
        for (let j = 0; j < row; ++j) {
            result[i][j] = matrix[j][i];
        }
    }
    
    return result;
};

transpose([
    [2],[6],[2]
])

/*
PERFORMANCE SOLUTION 

var transpose = function (matrix) {
    const res = new Array(matrix[0].length).fill(null).map(() => new Array(matrix.length));


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            res[col][row]= matrix[row][col]
        }
    }

    return res;
};

ORIGINAL SOLUTION 

const transpose = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;
    let result = Array.from({ length: col }, () => Array(row).fill(0));
    
    for (let i = 0; i < col; ++i) {
        for (let j = 0; j < row; ++j) {
            result[i][j] = matrix[j][i];
        }
    }
    
    return result;
};


while(i <= matrix[i].length && j < matrix[i].length) {
        
        row.push(matrix[i][j])
        i++
    
        if(i === matrix[i].length) {
            result.push(row)
            row = []
            i = 0
            j++
        }
    }
    return result



for(let i = 0;i < matrix.length;i++) {
        let row = []
        for(let j = i;j < matrix[i].length;j++) {
            row.push(matrix[i][j])
        }
    }
*/