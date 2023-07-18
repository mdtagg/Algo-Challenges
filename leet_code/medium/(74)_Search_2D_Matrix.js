
/*
You are given an m x n integer matrix matrix with the following
 two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last 
integer of the previous row.
Given an integer target, return true if target is in matrix 
or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

*/

const searchMatrix = (matrix,target) => {
    for(let i = 0;i < matrix.length;i++) {
        if(matrix[i][0] < target) {
            for(let j = 0;j < matrix[i].length;j++) {
                console.log(matrix[i][j])
                if(matrix[i][j] === target) {
                    return true
                }
                else if(matrix[i][j] > target) {
                    break
                }
            }
        }
        else {
            continue
        }
    }
    return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))

/*
ALTERNATE SOLUTION 

for(let i = 0;i < matrix.length;i++) {
        if(matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
            let left = 0
            let right = matrix[i].length - 1

            while(left < right) {
                if(matrix[i][left] === target) {
                    return true
                }
                else if(matrix[i][left] < target) {
                    left++
                }
                else {
                    right--
                }
            }
        }else if(matrix[i][0] > target) {
            return false
        }
    }

*/

/*
MY SOLUTION 

for(let i = 0;i < matrix.length;i++) {
    if(matrix[i][0] < target) {
        for(let j = 0;j < matrix[i].length;j++) {
            console.log(matrix[i][j])
            if(matrix[i][j] === target) {
                return true
            }
            else if(matrix[i][j] > target) {
                break
            }
        }
    }
    else {
        continue
    }
}
return false

*/