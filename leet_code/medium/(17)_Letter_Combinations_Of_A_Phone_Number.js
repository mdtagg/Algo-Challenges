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

    const results = []

    const digitsMap = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','0'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }

    function permute(string,index) {
        if(index === digits.length) {
            results.push(string)
            return
        }
        for(let x of digitsMap[digits[index]]) {
            permute(string + x, index + 1)
        }
    }
    permute('',0)
    return results
};

console.log(letterCombinations('237'))

/*
This solution uses recursion to create the strings we need for the solution

Using '2,3,7' as an example, first we need to associate each number with
its corresponding value, this is the digits map object. 

Then we create an empty array to store our possible combos. 
After that the trick is to create a recursive function that builds the 
strings we need. 

Our base case is met when the index is equal to the length of our initial
input. Each time we recurse the permute function we are pulling the array of
values out of the digit map, then we are iterating through each value in 
the for loop. 

The sequence here goes a,d,p then a,d,q then a,d,r and so on all the way back
to c,f,s
*/

//redo 3

// const results = []

//    const digitsMap = {
//     2: ['a','b','c'],
//     3: ['d','e','f'],
//     4: ['g','h','i'],
//     5: ['j','k','l'],
//     6: ['m','n','0'],
//     7: ['p','q','r','s'],
//     8: ['t','u','v'],
//     9: ['w','x','y','z']
//    } 

//    function permute(string,index) {
//     if(index === digits.length) {
//         results.push(string)
//         return
//     }
//     for(let x of digitsMap[digits[index]]) {
//         permute(string + x, index + 1)
//     }
//    }
//    permute("",0)
//    return results

//REDO 2

// const digitsMap = {
//     2: ['a','b','c'],
//     3: ['d','e','f'],
//     4: ['g','h','i'],
//     5: ['j','k','l'],
//     6: ['m','n','0'],
//     7: ['p','q','r','s'],
//     8: ['t','u','v'],
//     9: ['w','x','y','z']
// }

// let possibleLetters = []

// function permute(string,index) {
//     if(index === digits.length) {
//         possibleLetters.push(string)
//         return
//     }
//     for(let x of digitsMap[digits[index]]) {
//         permute(string + x,index + 1)
//     }
// }

// permute('',0)
// return possibleLetters

// function permute(string,index) {
//     if(index === digits.length) {
//         possibleLetters.push(string)
//         return
//     }
//     for(let x of digitsMap[digits[index]]) {
//         permute(string + x,index + 1)
        
//     }
// }
// permute('',0)
// return possibleLetters

// for(let i = 0;i < digitArray.length;i++) {
//     for(let j = 0;j < digitArray[i].length;j++) {
//         const possibleCombo = `${digitArray[currentIndex][i]}${digitArray[index + 1][j]}`
//         console.log(possibleCombo)
//         if(combos.has(possibleCombo)) {
//             continue
//         }else {
//             combos.add(possibleCombo)
//         }
//     }
// }
// index++





















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

