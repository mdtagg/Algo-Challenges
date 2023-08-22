

const divide = (dividend,divisor) => {
    const isNegative = Math.sign(dividend) !== Math.sign(divisor)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    let ans = 0

    while(divisor <= dividend) {
        let val = divisor 
        let multiplier = 1
        while(val + val <= dividend) {
            val += val
            multiplier+= multiplier
        }
        dividend -= val 
        ans += multiplier
    }
    if(ans >= ((2**31) - 1)) {
        return isNegative ? -(2**31) : 2**31 - 1
    }
    return isNegative ? -ans : ans
}

divide(10,3)