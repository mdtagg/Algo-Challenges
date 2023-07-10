/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent. Return the answer in any order.

    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','0'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
*/


var letterCombinations = function(digits) {
    const digitMap = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','0'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    const individualDigits = digits.split('').map(digit => {
        return digitMap[digit]
    })
    
    

};

letterCombinations('234')





















// if(!digits.length) return []
//     let digitsMap = {
//         2: ['a','b','c'],
//         3: ['d','e','f'],
//         4: ['g','h','i'],
//         5: ['j','k','l'],
//         6: ['m','n','0'],
//         7: ['p','q','r','s'],
//         8: ['t','u','v'],
//         9: ['w','x','y','z']
//     }
//     let possibleLetters = []
//     function permute(string,index) {
//         console.log({string,index})
//         if(index === digits.length) {
//             possibleLetters.push(string)
//             return
//         }
//         for(let x of digitsMap[digits[index]]) {
//             //if digits has a length of 2, there are two layers to the recursion (not counting)
//             //the entry or first layer). The first layer is a b c. The second layer happens while
//             //each of the first layers is being iterated over, ad ae af then on to b layer. 
//             //for more each increase in length the branches increase exponentially. 
//             permute(string + x,index + 1)
//         }
//     }
//     permute('',0)
//     console.log(possibleLetters)


// digits = digits.split('')
//     // console.log(digits)
//     let possibleLetters = []
//     digits.forEach(digit => {
//         switch(digit) {
//             case '2':
//                 possibleLetters.push('abc')
//                 break
//             case '3':
//                 possibleLetters.push('def')
//                 break
//             case '4':
//                 possibleLetters.push('ghi')
//                 break
//             case '5':
//                 possibleLetters.push('jkl')
//                 break
//             case '6':
//                 possibleLetters.push('mno')
//                 break
//             case '7':
//                 possibleLetters.push('pqrs')
//                 break
//             case '8':
//                 possibleLetters.push('tuv')
//                 break
//             case '9':
//                 possibleLetters.push('wxyz')
//                 break
//         }
//     })
//     if(possibleLetters.length === 1) return possibleLetters[0].split('')
//     // possibleLetters = possibleLetters.map(group => {return group.split('')})
//     console.log(possibleLetters)

//     let letters = []
//     let right = 0
//     let count = 0
//     while(count < 15) {
//         for(let i = 1;i < possibleLetters.length;i++) {
//             if(right > possibleLetters.length - 1) {
//                 possibleLetters.shift()
//                 right = 0
//             }
//             let letter = possibleLetters[0][right]
//             for(let j = 0;j < possibleLetters[i].length;j++) {
//                 letters.push(letter + possibleLetters[i][j])
//                 let letterTest = letters
//                 console.log({i,j,right,letterTest})
//                 if(j === possibleLetters[i].length - 1 && right === possibleLetters.length) {
//                     // possibleLetters.shift()
//                     // right = 0
//                     break
//                 }
//             }
//             // break
//         }
//         right++
//         count++
//         if(possibleLetters.length === 1) {
//             break
//         }
//     }

//     console.log(letters)

