

function lowestBase(s) {
    // let number = s
    let baseNumbers = [1]
    let baseRep = []
    let base = 2
    while(base < s) {
        baseNumbers.push(base)
        base *= 2
    }
    console.log(baseNumbers)
    for(let i = baseNumbers.length - 1;i >= 0;i--) {
        if(s - baseNumbers[i] >= 0) {
            baseRep.push('1')
            s -= baseNumbers[i]
        }
        if(i === 0 && s === 0) {
            console.log(baseNumbers[1])
        }else if(i === 0 && s !== 0) {

        }
    }
    console.log(baseRep)
}

lowestBase(7)













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