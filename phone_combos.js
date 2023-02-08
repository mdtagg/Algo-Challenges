var letterCombinations = function(digits) {
    digits = digits.split('')
    let duplicates = []
    // for(let i = 0;i < digits.length;i++) {
    //     if(duplicates.includes(digits[i])) {
    //         digits.splice(i,1)
    //     }else {
    //         duplicates.push(digits[i])
    //     }
    // }
    console.log(digits)
    possibleLetters = []
    digits.forEach(digit => {
        switch(digit) {
            case '2':
                possibleLetters.push('abc')
                break
            case '3':
                possibleLetters.push('def')
                break
            case '4':
                possibleLetters.push('ghi')
                break
            case '5':
                possibleLetters.push('jkl')
                break
            case '6':
                possibleLetters.push('mno')
                break
            case '7':
                possibleLetters.push('pqrs')
                break
            case '8':
                possibleLetters.push('tuv')
                break
            case '9':
                possibleLetters.push('wxyz')
                break
        }
    })
    if(possibleLetters.length === 1) return possibleLetters[0].split('')
    console.log(possibleLetters)
    let letters = []
    let left = 0
    let right = 0
    let count = 0
    while(count < 10) {
        for(let i = left + 1;i < possibleLetters.length;i++) {
            let letter = possibleLetters[left][right]
            for(let j = 0;j < possibleLetters[i].length;j++) {
                letters.push(letter + possibleLetters[i][j])
            }
        }
        if(right === possibleLetters.length - 1) {
            left++
            right = 0
        }
        right++
        count++
        
    }
    console.log(letters)
};

letterCombinations('234')

