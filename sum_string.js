function sumStrings(a,b) { 
    if(a === '' || b === '') {
        return a === '' ? b : a
    }else {
        let sum = parseInt(a) + parseInt(b)
        console.log(sum)
        let sumArray = sum.toString().split('')
        let spliceIndex = sumArray.findIndex(item => item === '+') + 1
        let exponent = sumArray.splice(spliceIndex).join('')
        console.log(exponent)

        let count = 6
        let newArray = []
        // console.log(sumArray)
        while(count > 0) {
            let firstNumber = sum.toString().split('')[0]
            newArray.push(firstNumber)
            let newNumber = '0'.repeat(exponent).split('')
            exponent--
            newNumber.unshift(firstNumber)
            newNumber = parseInt(newNumber.join(''))
            sum -= newNumber
            // console.log(firstNumber)
            // console.log(newNumber)
            console.log(exponent)
            console.log(sum)
            count--
        }
        console.log(newArray)
        
        // while(count > 0) {
            
        //     newNumber.push()
        //     count--
        // }
        // console.log(sum - 700000000000000000000000000)
        //e+26 is 26 numbers AFTER the first number 
        //Potential Solution: subtract each number place off of the whole number
        //and then put that number into a separate array
        //while 26 is greater than 0 

        // let test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
        // console.log(test.join(''))
        
    }
}

sumStrings('712569312664357328695151392', '8100824045303269669937')

// let testArr = []
//         let sum = parseInt(a) + parseInt(b)
//         let zero = '0'
        
//         let test = zero.repeat(25)
//         test = test.split('')
//         // console.log(test)
//         test.unshift('7')
//         console.log(parseInt(test.join('')))
//         console.log(sum - parseInt(test.join('')))