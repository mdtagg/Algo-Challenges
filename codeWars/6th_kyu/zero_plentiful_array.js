function zeroPlentiful(arr){
    let zeroArr = []
    while(arr.length) {
        let zero = []
        while(arr[0] === 0) {
            zero.push(...arr.splice(0,1))
        }
        zero.length ? zeroArr.push(zero) : arr.splice(0,1)
    }
    console.log(zeroArr.every(item => item.length >= 4) ? zeroArr.length : 0)
}

//BEST SOLUTION (most clever in this case)

function zeroPlentiful(arr){
    var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
    console.log(arr.map((x) => !x ? x : ',').join('').split(','))
    console.log(sequences.every((str) => str.length >= 4) ? sequences.length : 0);
  }

/*

- zero is falsy so if you need to filter numbers apart from zero you can use
it as a boolean. 

-.filter can be used to remove blank spaces. 

The arr.map is checking to see if each number is true or false, which in the 
case of 0 is true because zero is a falsy value. Filter is used to remove 
any blank space in an array. 
*/

zeroPlentiful([1000,0,1,0,0,0,0])









// function zeroPlentiful(arr){
//     let zeroArr = []
//     while(arr.length) {
//         let zero = []
//         if(arr[0] === 0) {
//             while(arr[0] === 0) {
//                 zero.push(...arr.splice(0,1))
//             }
//             zeroArr.push(zero)
//         }else if(arr[0] !== 0) {
//             arr.splice(0,1)
//         }
//     }
//     return zeroArr.every(item => item.length >= 4) ? zeroArr.length : 0
// }


// let test = []
//     for(let i = 0;i < arr.length;i++) {
//         if(arr[i] === 0) {
//             let zeros = []
//             while(arr[i] === 0) {
//                 zeros.push(arr.splice(0,1))
//             }
//             console.log(zeros)
//         }
//         test.push(arr.splice(0,1))
        
//     }
//     console.log(test)

// let totalZeros = 0
//     let zeroCount = 0
//     for(let i = 0;i < arr.length;i++) {
//         if(arr[i] === 0) {
//             zeroCount++
//         } else if(arr [i] !== 0) {
//             totalZeros = 0
//             break
//         }
//     }

// let regex = /0{1,}/g
//     let zeroTest = arr.join('').match(regex)
//     console.log(zeroTest)
//     if(zeroTest.every(item => item.length >= 4)) {
//         console.log(zeroTest.length)
//     }else {
//         console.log(0)
//     }




// for(let i = 0;i < arr.length;i++) {
//     if(arr[i] === 0) {
//         zeroCount++
//     } else if(arr[i] !== 0 && zeroCount !== 0) {
//         totalZeros = 0
//         break
//     }
//     else {
//         zeroCount = 0
//     }
//     if(zeroCount >= 4 && arr[i + 1] !== 0) {
//         totalZeros++
//         zeroCount = 0
//     }
//     // console.log(zeroCount)
// }
// console.log(totalZeros)



