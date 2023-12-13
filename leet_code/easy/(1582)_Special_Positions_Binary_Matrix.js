

const numSpecial = (mat) => {

    let specials = 0

    for(let i = 0;i < mat.length;i++) {
        let row = 0
        let col = false

        for(let j = 0;j < mat[i].length;j++) {
            row += mat[i][j]
            if(mat[i][j] === 1) {
                col = helper(mat,i,j)
            }
        }
        if(row === 1 && col === true) specials++;
    }
    return specials
}

function helper(mat,i,j) {
    let row = 0

    while(row < mat.length) {
        if(row !== i && mat[row][j] === 1) return false;
        row++
    }
    return true
}


numSpecial([[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]])

/*
ORIGINAL SOLUTION

const numSpecial = (mat) => {

    let specials = 0

    for(let i = 0;i < mat.length;i++) {
        let row = 0
        let col = false

        for(let j = 0;j < mat[i].length;j++) {
            row += mat[i][j]
            if(mat[i][j] === 1) {
                col = helper(mat,i,j)
            }
        }
        if(row === 1 && col === true) specials++;
    }
    return specials
}

function helper(mat,i,j) {
    let row = 0

    while(row < mat.length) {
        if(row !== i && mat[row][j] === 1) return false;
        row++
    }
    return true
}


var numSpecial = function(mat) {
    let sp = 0;
    
    const m = mat.length;
    const n = mat[0].length;
    
    const scanRow = row => mat[row].reduce((c, e) => e ? ++c : c, 0) === 1;
    
    const scanColumn = col => {
        let count = 0;
        
        for (let i = 0; i < m; i++)
            mat[i][col] && ++count;
        
        return count === 1;
    };
    
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            mat[i][j] === 1 && scanRow(i) && scanColumn(j) && ++sp 
    
    return sp;
};
*/

