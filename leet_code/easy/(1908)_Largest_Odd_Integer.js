

const largestOddNumber = (num) => {
    let largestOdd = ""
    for(let i = num.length - 1;i >= 0;i--) {
        if(parseInt(num[i]) % 2 !== 0) return num.substring(0,i + 1)
    }
    return largestOdd
}

console.log(largestOddNumber("52"))

