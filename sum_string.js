function sumStrings(a,b) { 
    if(a === '' || b === '') {
        return a === '' ? b : a
    }else {
        let sum = parseInt(a) + parseInt(b)
        let sumArray = sum.toString().split('')
        console.log(sumArray.slice(19,sliceArray.length - 1))
        console.log(sumArray.findIndex(item => item === '+'))
        console.log(sum - 700000000000000000000000000)
        //e+26 is 26 numbers AFTER the first number 
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