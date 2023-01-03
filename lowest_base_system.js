function lowestBase(s) {
    let result = s - 1
    let base = 2
    console.log(result / 5000)
    
    // while(base < 5001) {
    //     let reduced = []
    //     if(result % base === 0) {
            
    //     }
    // }
    // console.log(base)
    
}

lowestBase(125002500050001)




// let base = 2
//     console.log(Math.pow(13,13))
//     console.log(Math.pow(14,14))
//     while(Math.pow(base,base) <= s) {
//         base++
//     }
//     console.log(base)
//     let result = s
//     let test = 0
//     while(result > 1) {
//         result = Math.floor(result / base)
//         test++
//     }
//     console.log(test)


// let base = 4
//     let testArr = [1]
//     let currentBase = base
//     if(testArr.reduce((prev,curr) => prev +curr) === s) {
//         console.log(base)
//     }
//     while(testArr.reduce((prev,curr) => prev + curr,base) !== s) {
//         currentBase *= base
//         testArr.push(currentBase)
        
//     }
















// let test = 1000
//     console.log(test.toString(2))
    // console.log(s.toString(3))
    // console.log(test.toString(2))
    // [4,2,1]
    // [1,0,1,0,1]
    // [1,0.5,0,0,1]
    // [1,0.5,0.25]

    // [16,1,4] [1,.125,1]
    
    // [512,256,128,64,32,8]

    

    // [1,1,1,0,0,1]
    // [1,1,1,.25]
    // [1,1,1,0,.5,0]
    // [1,1,1,.25,0,0]
    // [1,1,.625,1]
    
    // [1.5,0,1,0,0,1]
    // [1.5,0.5,0,0,0,1]
    // [1.5,0.5,0.125]

    

    // [1.5,0,1,0,0,1]
    // [1.5,.5,0,0,0,1]
    // [1.5,.5,.125]
    // [1.75,0,.125]
    // [1.75,0.625]

















    // 125002500050001

   
        //     let test = 16
        //     console.log(test.toString(4))
        //     // console.log(test)
        //     // console.log(s.toString(2))
        //     let sArray = s.toString(2).split('')
        //     console.log(sArray)
        //     let baseArray = [1]
        //     let base = 2
        //     for(let i = sArray.length - 2;i >= 0;i--) {
        //         if(sArray[i] === '1') {
        //             baseArray.push(base)
        //         }else {
        //             baseArray.push(0)
        //         }
        //         base*=2
        //     }
        //     console.log(baseArray.reverse())
        //     // console.log(21 + 2 - 3 + 8 - 16)
    
//     let numbers = [2,3,4,5,6,7,8,9,10]
//     let newS = s - 1 
//     let test = false
//     while(test === false) {  
//         for(let i = 0;i < numbers.length;i++) {
//             let base = numbers[i]
//             let testArr = [1]
//             while(base <= newS) {
//                 let reduced = testArr.reduce((prev,curr) => prev + curr,base)
//                 if(newS % reduced !== 0) {
//                     break
//                 }
//                 testArr.push(base)
//                 base *= numbers[i]
//             }
//             let testFunc = testArr.reduce((prev,curr) => prev + curr)

//             if(testFunc === s) {
//                 console.log(testArr)
//                 console.log(numbers[i])
//                 test = true
//                 break
//             }
//             else if(i === 8) {
//                 numbers = numbers.map(number => number * 10)
//                 // console.log('numbers: ',numbers)
//                 test = true
//             }
//             // console.log(testArr)
//         }
//         // break
//     }
// }


// console.log(numbers)
// if(!numbers.length) {
//     console.log(newS)
// }else {
// // console.log(numbers)
// numbers = numbers.filter(number => number**2 < newS)
// console.log(numbers)
// // console.log(s % (10 * 10 + 1 + 10))
// numbers = numbers.filter(number => newS % (number * number) <= 1)
// console.log(numbers)
// console.log(numbers[numbers.length - 1])
// if(!numbers.length) {
//     console.log(s - 1)
// }
// }




// console.log(s.toString(2))
//     let numbers = []
//     let newS = s - 1
//     let newTest = []
//     console.log(s.toString(2))

//     if(newS % 10 === 0) {
//         let test = newS.toString().split('')
//         for(let i = test.length - 1;i > 0;i--) {
//             if(test[i] !== '0') {
//                 newTest = test.splice(i)
//                 break
//             }
//         }
//         console.log(parseInt(newTest.join('')))
//         return parseInt(newTest.join(''))
//     }else {

//     for(let i = 2;i < 10;i++) {
//         if((s-1) % i === 0) {
//             numbers.push(i)
//         }else if(!numbers.length) {
//             break
//         }
//     }
//     console.log(numbers)

//     for(let i = numbers.length - 1;i >= 0;i--) {
//         let base = numbers[i]
//         let prevBase = numbers[i]
//         while(base <= s) {
//             base *= base
//             base += prevBase
//             prevBase = base
//             // console.log(base)
//             if(base === s - 1) {
//                 console.log(numbers[i])
//                 return numbers[i]
//             }else if(i === 0) {
//                 // numbers = numbers.map(number => number * 10)
//                 // console.log(numbers)
//                 break
//             }
//         }
//     }
// }


// let newS = s - 1
//     let newArray = s.toString().split('')
//     let numbers = []
//     console.log(s.toString(2))

//     for(let i = 2;i < 11;i++) {
//         if(newS % i === 0) {
//         numbers.push(i)
//     }
    
//    }
//    console.log(numbers)
   
//    for(let i = 0;i < numbers.length;i++) {

//     let base = numbers[i]
//     let prevBase = numbers[i]

//     while(base < newS) {
//         console.log(base)
//         base *= base
//         base += prevBase
//         prevBase = base
        
//         }if(newS % base !== 0) {

//             break
//         }
//         if(base === newS) {
//             console.log('success: ',numbers[i])
//            break
//         } 
//     }


// let test = s.toString(2).split('')
//     console.log(test)
//     let newTest = 1
//     console.log(parseInt('111',2))
//     let testFunc = test.every(item => item === '1')
//     console.log(testFunc)
//     if(testFunc) {
//         console.log(2)
//     }else {
//     while(!test.every(item => item === '1')) {
//     for(let i = 0;i < test.length;i++) {
//         if(test[0] === '0') {
//             test.splice(0,1)
//         }
//         else if(test[i + 1] === '0') {
//             test[i] = '0'
//             test[i + 1] = '1'
//             newTest++
//             console.log(test)
//         }
//     }
// }
// console.log(newTest)
//     }


// 125002500050001


// let baseNumbers = []
//     let numbers = []
//     let newS = s - 1
//     console.log(s.toString(2))
//     console.log()
//     for(let i = 2;i < 11;i++) {
//         if(newS % i === 0) {
//             numbers.push(i)
//         }
//     }
//     if(!numbers.length) {
//         console.log(newS)
//     }else {
//     console.log(numbers)
//     while(s > 0) {
//         let sqrt = Math.floor(Math.sqrt(s))
//         if(s === 1) {
//             console.log(baseNumbers[baseNumbers.length - 1])
//             break
//         }
//         s -= sqrt**2 
//         baseNumbers.push(s)
//     }
//     console.log(baseNumbers)
// }









// console.log(s)
//         let newTest = newS.toString().split('')
//         let number = ""
//         for(let i = newTest.length;i > 0;i--) {
//             console.log(newTest[i])
//             if(newTest[i] !== 0) {
//                 number = newTest[i]
//                 break
//             }
//         }
//         console.log(number)
//         let index = test.lastIndexOf('1')
//         test.splice(0,index)
//         test = parseInt(test.join(''))

























// let number = s
// let base = 2
// console.log(s.toString(20))
// while(number !== 0) {
//     let baseNumbers = [1]
//     let currentBase = base
//     let baseRep = []
//     while(base < number) {
//         baseNumbers.push(base)
//         base *= currentBase
//     }
//     console.log(baseNumbers)
//     for(let i = baseNumbers.length - 1;i >= 0;i--) {
        
//         if(number - baseNumbers[i] >= 0) {
//             number -= baseNumbers[i]
//             baseRep.push('1')
//         }else {
//             baseRep.push('0')
//         }
//         if(i === 0 && number !== 0) {
//             baseRep.push('0')
//         }
//     }
//     if(baseRep.every(number => number === '1')) {
//         console.log(currentBase)
//     }else {
//         base = baseNumbers[1] + 1
//         number = s
//     }
//     console.log(baseRep)
// }












// for(let i = 2;i < s;i++) {
//     let string = s.toString(i).split('')
//     if(string.every(number => number === '1')) {
//         console.log(i)
//         return i
//     }else if(i === 36) {
//         console.log(false)
//         return false
//     }
// }