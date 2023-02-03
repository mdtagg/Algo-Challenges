var convert = function(s, numRows) {
    let sArr = s.split('')
    let newStr = []
    let columnCount = 1
    while(sArr.length) {
        if(columnCount % 2 !== 0) {
            for(let i = 0;i < sArr.length;i += numRows) {
                newStr.push(...sArr.splice(i,1))
            }
            numRows--
        }
        else {
            newStr.push(...sArr.splice(0,1))
            for(let i = 0;i < sArr.length;i += numRows) {
                newStr.push(...sArr.splice(i,1))
            }
        }
        // console.log(sArr)
        
        columnCount++
        // break
    }
    console.log(newStr)
};


convert("PAYPALISHIRING",3)

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