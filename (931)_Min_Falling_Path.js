
const minFallingPathSum = (matrix) => {
    //intuition dynamic programming problem
    //initialize a sperate matrix with the same row and col lengths as matrix
    //each entry being set to positive infinity (we are later going to set the values a mininum so pos infinity is a good placeholder)

    //set the first row of new matrix to first row of old matrix

    //iterate through the old matrix starting at the second row (i = 1 j = 0)
        //assign each value to the minimum of the value we are on in old matrix 
        // against three directions (up,left and right) of the previous row in our 
        //new matrix

    //return the min value of the last row in our new matrix

    const dp = generateDp(matrix)

    dp[0] = matrix[0]

    for(let i = 1;i < matrix.length;i++) {
        for(let j = 0;j < matrix[0].length;j++) {

            const left = matrix[i][j] + dp[i - 1][j - 1] || Infinity
            const right = matrix[i][j] + dp[i - 1][j + 1] || Infinity 
            const center = matrix[i][j] + dp[i - 1][j]

            dp[i][j] = Math.min(left,right,center)
        }
    }
    return Math.min(...dp[dp.length - 1])
    
}

function generateDp(matrix) {
    let arr = []
    for(let i = 0;i < matrix.length;i++) {
        arr[i] = []
        for(let j = 0;j < matrix[i].length;j++) {
            arr[i][j] = Infinity
        }
    }
    return arr
}

minFallingPathSum([
    [2,1,3],
    [6,5,4],
    [7,8,9]
])

/*
var minFallingPathSum = function(matrix) {
    const n = matrix.length-1;
    const dp = initDp(n);
    dp[0] = matrix[0]
    for(let i=1;i<=n;i++){
    for(let j=0;j<=n;j++){
           
                const left = matrix[i][j] + dp[i-1][j-1] || Number.POSITIVE_INFINITY;
                const right = matrix[i][j] +dp[i-1][j+1]|| Number.POSITIVE_INFINITY;
                const center = matrix[i][j] + dp[i-1][j];
               dp[i][j] =  Math.min(left,right,center);
       }
    
    }
    return Math.min(...dp[n]);
};
const initDp = (n) => {
    const dp = [];
    for(let i=0;i<=n;i++){
        dp[i] = [];
        for(let j=0;j<=n;j++){
            dp[i][j] = Number.POSITIVE_INFINITY;;
        }
    }
    return dp;
}

const minFallingPathSum = (matrix) => {
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let j = 0; j < m; j++) {
        dp[0][j] = matrix[0][j];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let ld = Infinity, rd = Infinity;
            const up = matrix[i][j] + dp[i - 1][j];

            if (j - 1 >= 0) {
                ld = matrix[i][j] + dp[i - 1][j - 1];
            }
            if (j + 1 < m) {
                rd = matrix[i][j] + dp[i - 1][j + 1];
            }

            dp[i][j] = Math.min(up, Math.min(ld, rd));
        }
    }

    let mini = dp[n - 1][0];
    for (let j = 1; j < m; j++) {
        mini = Math.min(mini, dp[n - 1][j]);
    }
    return mini;
}

const minFallingPathSum = (matrix) => {

    let minSum = Infinity

    function recurse(row,col) {
        let val = matrix[row][col]
        let sum

        if(matrix[row + 1]) {
           sum = val + recurse(++row,col)
           if(row === 1) minSum = Math.min(sum,minSum);
           else return sum;
        }
        else return matrix[row][col]
    }
    recurse(0,0)
}

let sum = 0
        let nextRow = matrix[row + 1]
        if(nextRow) {
            if(matrix[row + 1][col + 1]) {
                sum += matrix[row + 1][col + 1] + recurse(row + 1,col + 1);
            }
            if(matrix[row + 1][col - 1]) {
                sum += matrix[row + 1][col - 1] + recurse(row + 1,col - 1)
            }
            sum += matrix[row + 1][col] + recurse(row + 1,col);
        }else return sum
        minSum = Math.min(sum,minSum)
*/