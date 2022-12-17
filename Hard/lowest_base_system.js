

function lowestBase(s) {
    let number = s
    let base = 2
    while(number !== 0) {
        let baseNumbers = [1]
        let currentBase = base
        let baseRep = []
        while(base < number) {
            baseNumbers.push(base)
            base *= base
        }
        // console.log(baseNumbers)
        for(let i = baseNumbers.length - 1;i >= 0;i--) {
            
            if(number - baseNumbers[i] >= 0) {
                number -= baseNumbers[i]
                baseRep.push('1')
            }else {
                baseRep.push('0')
            }
            if(i === 0 && number !== 0) {
                baseRep.push('0')
            }
        }
        if(baseRep.every(number => number === '1')) {
            console.log(currentBase)
        }else {
            base = baseNumbers[1] + 1
            number = s
        }
        // console.log(baseRep)
    }
}

lowestBase(57)













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