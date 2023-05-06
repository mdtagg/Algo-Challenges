/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes 
the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
    if(x === 0) return 0
    let xArr = x.toString().split('').reverse()
    while(xArr[0] === '0') {
        xArr.splice(0,1)
    }
    x = parseInt(xArr.join(''))
    if(xArr[xArr.length - 1] === '-') {
        x *= -1
    }
    if(x > 2**31 || x < (2**31) * -1) return 0
    console.log(x)
};

reverse(1534236469)

// let xArr = x.toString()
//     if(xArr[0] === '-') {
//         xArr = xArr.split('').reverse()
//         let minus = xArr.pop()
//         while(xArr[0] === 0) {
//             xArr.splice(0,1)
//         }
//         xArr.unshift(minus)
//         return parseInt(xArr.join(''))
//     }else {
//         x = parseInt(x.toString().split('').reverse().join(''))
//     }
//     console.log(x)
//     return x