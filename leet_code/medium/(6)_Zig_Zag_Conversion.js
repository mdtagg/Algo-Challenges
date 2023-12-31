/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like 
this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
*/


var convert = function(s, numRows) {

    if(numRows === 1) return s
    let arr = new Array(numRows).fill('')
    let result = ''
    if(numRows == 2) {
        for(let i = 0;i < s.length;i++) {
            i % 2 !== 0 ? arr[1] += s[i] : arr[0] += s[i]
        }
    }
    else {
        let rowCount = 0
        let colCount = numRows - 2
        let zigzag = false

        for(let i = 0;i < s.length;i++) {
            if(rowCount == numRows) {
                rowCount = 0
                zigzag = true
            }
            else if(colCount == 0) {
                colCount = numRows - 2
                zigzag = false
            }
            if(zigzag) {
                arr[colCount] += s[i]
                colCount--
            }
            else {
                arr[rowCount] += s[i]
                rowCount++
            }
        }
    }
    for(let i = 0;i < arr.length;i++) {
        result += arr[i]
    }
    return result
};


convert("ABCD",2)

/*
let arr = new Array(numRows).fill(new Array())
    let count = numRows - 1
    let zag = false

    for(let i = 0;i < s.length;i++) {
        
        if(!zag) {
            arr[i % numRows] = [...arr[i % numRows],s[i]]
        }else {
            arr[numRows - (i % numRows) - 2] = [...arr[numRows - (i % numRows) - 2],s[i]]
            count--
        }
        if((i + 1) % numRows === 0 || count == 0) {
            zag = !zag;
            count = numRows - 1
        }

    }


var convert = function(s, numRows) {
    let sArr = s.split('')
    let rows = Array.from(Array(numRows), () => [])
    while(sArr.length) {
        for(let i = 0;i < s.length;i++) {
            let columnCount = numRows - 1
            if(i < numRows) {
                if(!sArr.length) break
                rows[i].push(sArr.shift())
            }else if(i % numRows === 0) {
                while(columnCount > 1) {
                    columnCount--
                    rows[columnCount].push(sArr.shift())
                }
                break
            }
        }
    }   
    rows = rows.map(row => row.join(''))
    let zigStr = rows.join('')
    console.log(zigStr)
};
*/

//BEST SOLUTION FOUND

// var convert = function(s, numRows) {
//     if (numRows === 1) return s;

//     const rows = new Array(numRows).fill('');

//     function getRowsIndex(i, n) {
//         const half = n - 1;
//         const round = 2 * half;
//         const index = i % round;
//         if (index >= half) {
//             return round - index;
//         } else {
//             return index;
//         }
//     }

//     for (let i = 0; i < s.length; i++) {
//         const index = getRowsIndex(i, numRows);
//         rows[index] += s[i];
//     }

//     return rows.join('');
// };

// let sArr = s.split('')
//     let newStr = []
//     let columnCount = 1
//     while(sArr.length) {
//         if(columnCount % 2 !== 0) {
//             for(let i = 0;i < sArr.length;i += numRows) {
//                 newStr.push(...sArr.splice(i,1))
//             }
//             numRows--
//         }
//         else {
//             newStr.push(...sArr.splice(0,1))
//             for(let i = 0;i < sArr.length;i += numRows) {
//                 newStr.push(...sArr.splice(i,1))
//             }
//         }
//         // console.log(sArr)
        
//         columnCount++
//         // break
//     }
//     console.log(newStr)

// s = s.split('')
// let rows = []
// while(numRows > 0) {
//     rows.push([])
//     numRows--
// }
// let columnCount = 1
// while(s.length) {
//     if(columnCount % 2 !== 0) {
//         for(let i = 0;i < rows.length;i++) {
//             rows[i].push(s.splice(0,1))
//         }  
//     }else {
//         for(let i = 0;i < rows.length;i++) {
//             if()
//         }
//     }
//     columnCount++
//     break
// }
// console.log(rows)

// newStr.push(...s.splice(0,1))
// for(let i = 0;i < s.length;i += 3) {
//     newStr.push(...s.splice(i,1))
// }
// console.log(s)
// break
// }
// // console.log(s)
// console.log(newStr)

// for(let i = 0;i < rows.length;i++) {
//     if(i < rows.length) {
//         rows[i].push(s.splice(0,1))
//     }

// }
// break

//     let test = 
//     `P   A   H   N
// A P L S I I G
// Y   I   R    `
// // console.log(test)
// console.log(test.split(''))