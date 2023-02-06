var divide = function(dividend, divisor) {
    let solution = 0
    if(dividend > 0 && divisor > 0) {
        while(dividend > 0) {
            dividend -= divisor
            if(dividend >= 0) {
                solution += 1
            }
        }
    }
    if(dividend > 0 && divisor < 0) {
        while(dividend > 0) {
            dividend += divisor
            if(dividend >= 0) {
                solution -= 1
            }
        }
    }
    if(dividend < 0 && divisor > 0) {
        while(dividend < 0) {
            dividend += divisor
            if(dividend <= 0) {
                solution -= 1
            }
        }
    }
    if(dividend < 0 && divisor < 0) {
        while(dividend < 0) {
            dividend -= divisor
            if(dividend <= 0) {
                solution += 1
            }
        }
    }
    if(solution > 2**31 - 1) {
        solution = 2**31 - 1
    }else if(solution < 2**31 * -1) {
        solution = 2**31 * -1
    }
    console.log(solution)
    
}

divide(-2147483648,2)

