function sumStrings(a,b) { 
    if(a === '' || b === '') {
        return a === '' ? b : a
    }else {
        let sum = BigInt(a) + BigInt(b)
        console.log(sum.toString())
    }
}

sumStrings('712569312664357328695151392', '8100824045303269669937')

//WHAT I LEARNED 

/*
- First use of BigInt. It is used to display numbers that are above the max 
safe integer. n is appended to the end of the number but can be removed with 
.toString. 

I had the right idea in the code graveyard below to find the exponent of the big
number and then subtract off the first number with the amount of zeros needed 
to remove the first number and then push that number into a new array. The 
problem was that js rounds the big number with appending the e+ to all zeros. 
*/

//CODE GRAVEYARD

// let exponent = sum.toString().split('+')[1] - 20
        // console.log(exponent)

        // let count = 6
        // let newArray = []
        // console.log(sumArray)
        // while(count > 0) {
        //     let firstNumber = sum.toString().split('')[0]
        //     newArray.push(firstNumber)
        //     let newNumber = '0'.repeat(exponent).split('')
        //     exponent--
        //     newNumber.unshift(firstNumber)
        //     newNumber = parseFloat(newNumber.join(''))
        //     sum -= newNumber
        //     // console.log(firstNumber)
        //     // console.log(newNumber)
        //     // console.log(exponent)
        //     // console.log(sum)
        //     count--
        // }

// let sumArray = sum.toString().split('')
//         let spliceIndex = sumArray.findIndex(item => item === '+') + 1
 // let exponent = sumArray.splice(spliceIndex).join('')

// let sum = parseInt(a) + parseInt(b)
//         console.log(sum)
//         let sumArray = sum.toString().split('')
//         let spliceIndex = sumArray.findIndex(item => item === '+') + 1
//         let exponent = sumArray.splice(spliceIndex).join('')
//         console.log(exponent)

//         let count = 6
//         let newArray = []
//         // console.log(sumArray)
//         while(count > 0) {
//             let firstNumber = sum.toString().split('')[0]
//             newArray.push(firstNumber)
//             let newNumber = '0'.repeat(exponent).split('')
//             exponent--
//             newNumber.unshift(firstNumber)
//             newNumber = parseInt(newNumber.join(''))
//             sum -= newNumber
//             // console.log(firstNumber)
//             // console.log(newNumber)
//             console.log(exponent)
//             console.log(sum)
//             count--
//         }
//         console.log(newArray)
        
//         // while(count > 0) {
            
//         //     newNumber.push()
//         //     count--
//         // }
//         // console.log(sum - 700000000000000000000000000)
//         //e+26 is 26 numbers AFTER the first number 
//         //Potential Solution: subtract each number place off of the whole number
//         //and then put that number into a separate array
//         //while 26 is greater than 0 

//         // let test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
//         // console.log(test.join(''))
        
//     }

// let testArr = []
//         let sum = parseInt(a) + parseInt(b)
//         let zero = '0'
        
//         let test = zero.repeat(25)
//         test = test.split('')
//         // console.log(test)
//         test.unshift('7')
//         console.log(parseInt(test.join('')))
//         console.log(sum - parseInt(test.join('')))