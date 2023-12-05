

const largestGoodInteger = (num) => {

    let max = 0
    let result = ""
    let i = 0
    let j = i + 2

    while(i < num.length - 2) {
        let substr = num.substring(i,j + 1)
        let arr = new Array(3).fill(substr[0]).join('')
        let firstNumber = parseInt(substr[0])
        if(substr === arr && firstNumber >= max) {
            max = firstNumber
            result = substr
        }
        i++
        j++
    }
    return result
}

largestGoodInteger("2300019")