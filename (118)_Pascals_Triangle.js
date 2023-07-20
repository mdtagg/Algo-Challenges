/*
Given an integer numRows, return the first numRows of Pascal's triangle.
*/

const generate = (numRows) => {
    if(numRows === 1) return [[1]]
    const results = [[1],[1,1]]
    for(let i = 1;i < numRows - 1;i++) {
        const test = []
        test.push(1)
        for(let j = 1;j < results[i].length;j++) {
            let newTest = results[i][j - 1] + results[i][j]
            test.push(newTest)
        }
        test.push(1)
        results.push(test)
    }
    console.log(results)
    return results
}

console.log(generate(1))

/*

PERFORMANCE SOLUTION 

var generate = function(numRows) {
    if (numRows == 1) return [[1]];
    if (numRows == 2) return [[1], [1, 1]];

    const rows = [[1], [1, 1]];
    let row = [1, 1];

    while (row.length < numRows) {
        row = generateNextRow(row);
        rows.push(row);
    }

    return rows;

};

const generateNextRow = (row) => {
    const nextRow = [1];

    for (let i = 0; i < row.length - 1; i++) {
        nextRow.push(row[i] + row[i + 1]);
    }

    nextRow.push(1);
    return nextRow;
}

MEMORY SOLUTION 

var generate = function(numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        result[i] = new Array(i + 1);
        result[i][0] = 1;
        result[i][i] = 1;
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }
    return result;
};

FIRST SOLUTION 

const generate = (numRows) => {
    if(numRows === 1) return [[1]]
    const results = [[1],[1,1]]
    for(let i = 1;i < numRows - 1;i++) {
        const test = []
        test.push(1)
        for(let j = 1;j < results[i].length;j++) {
            let newTest = results[i][j - 1] + results[i][j]
            test.push(newTest)
        }
        test.push(1)
        results.push(test)
    }
    return results
}


*/