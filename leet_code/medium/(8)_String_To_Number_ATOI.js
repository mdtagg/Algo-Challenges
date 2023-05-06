
/*
The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read 
this character in if it is either. This determines if the final result is negative or 
positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is
 reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were 
read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp 
the integer so that it remains in the range. Specifically, integers less than -231 
should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

var myAtoi = function(s) {
    s = s.trimStart().split('')
    let readables = ['+','-']
    if(!readables.includes(s[0]) && isNaN(parseInt(s[0]))) return 0
    let negative = false
    let newDigit = []
    if(s[0] === '+' || s[0] === '-') {
        if(s[0] === '-') {
            negative = true
        }
        s.shift()
    }
    while(!isNaN(parseInt(s[0]))) {
        newDigit.push(s.shift())
    }
    newDigit = parseInt(newDigit.join(''))
    if(isNaN(newDigit)) return 0
    negative ? newDigit *= -1 : newDigit
    if(newDigit >= 2**31) {
        newDigit = (2**31) - 1
    }else if((newDigit < (2**31) * -1)) {
        newDigit = (2**31) * -1
    }
    return newDigit
};

myAtoi("    +47 words")

//BEST SOLUTION

var myAtoi = function (s) {
    const n = Number.parseInt(s);
    return Number.isNaN(n) ? 0 : Math.min(2 ** 31 - 1, Math.max((-2) ** 31, n));
};

// let readableValues = ['-','+']
//     let digit = false
//     let newDigit = []
//     if(s[0] === '-') {
//         negative = true
//     }else if(!readableValues.includes(s[0]) || isNaN(parseInt(s[0]))) {
//         return 0
//     }
//     for(let i = 0;i < s.length;i++) {
//        if(!isNaN(parseInt(s[0]))) {
//         digit = true
//         newDigit.push(s[i])
//        }
//        if(digit && isNaN(parseInt(s[i]))) {
//         break
//        }
//     }
//     console.log(newDigit)

// getArray = s.trim().split('')
//     let sArr = []
//     getArray.forEach(character => {
//         if(!isNaN(parseInt(character))) {
//             sArr.push(character)
//         }
//     })
//     sArr = parseInt(sArr.join(''))
//     if(getArray[0] === '-') {
//         sArr *= -1
//     }
//     if(sArr > 2**31 || (sArr < (2**31) * -1)) return 0
//     console.log(sArr)
//     return sArr