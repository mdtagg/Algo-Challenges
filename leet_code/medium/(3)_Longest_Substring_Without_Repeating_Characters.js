
/*
Given a string s, find the length of the longest 
substring without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {

    let left = 0
    let right = 0
    let stack = []
    let longest = 0

    while(right < s.length) {
        if(stack.includes(s[right])) {
            stack.shift()
            left++
        }else {
            stack.push(s[right])
            right++
        }
        longest = Math.max(longest,stack.length)
    }
    return longest
};

console.log(lengthOfLongestSubstring("abcabcdbbc"))


















//REDO 4

// const visited = {}
//     let minLen = 0

//     let left = 0
//     let right = 0

//     while(right < s.length) {
//         if(visited[s[right]] === 1) {
//             // visited[s[right]]--
//             left++
//         }else {
//             visited[s[right]] = (visited[s[right]] || 0) + 1
//         }
//         if(!minLen || right - left + 1 > minLen) {
//             minLen = right - left + 1
//         }
//         right++
//     }
//     return minLen


















/*
PERFORMANCE SOLUTION

let left = 0
    let right = 0
    let stack = []
    let longest = 0

    while(right < s.length) {
        if(stack.includes(s[right])) {
            left++
            stack.shift()
        }else {
            stack.push(s[right])
            right++
        }
        longest = Math.max(longest,stack.length)
    }
    return longest

SLIDING WINDOW SOLUTION 

if(s === '') return 0
    let left = 0
    let right = 0
    let arr = []
    let longest = 0

    while(right < s.length) {
        if(arr.includes(s[right])) {
            left++
            right = left
            arr = [s[left]]
        }else {
            arr.push(s[right])
        }
        longest = Math.max(longest,arr.length)
        right++
    }
    return longest


if(s === '') return 0
    if(s.length === 1) return 1
    let longestStr = 0

    for(let i = 0;i < s.length;i++) {

        let left = i
        let right = left + 1
        let strArray = [s[left]]

        while(!strArray.includes(s[right]) && right < s.length) {
            strArray.push(s[right])
            right++
        }
        if(strArray.length > longestStr) {
            longestStr = strArray.length
        }
    }
    return longestStr

*/

// if(s === '') return 0
//     // if(s.length === 1) return 1
//     let strArray = []
//     let longestStr = 0

//     for(let i = 0;i < s.length;i++) {
//         if(!strArray.includes(s[i])) {
//             strArray.push(s[i])
//         }else {
//             strArray = [s[i]]
//         }
//         longestStr = Math.max(longestStr,strArray.length)
//     }
//     return longestStr

// let strArray = []
//     let longestStr = ''
//     for(let i = 0;i < s.length;i++) {
//         if(!strArray.includes(s[i])) {
//             strArray.push(s[i])
//         }else {
//             if(strArray.length > longestStr.length) {
//                 longestStr = strArray.join('')
//             }
//             strArray = [s[i]]
//         }
//     }
//     console.log(longestStr)



















// // if(s === '') return 0
// let strArray = s.split('')
// let duplicates = []
// let highestVal = 0
// while(strArray.length) {
//     for(let i = 0;i < strArray.length;i++) {
//         if(!duplicates.includes(strArray[i])) {
//             duplicates.push(strArray[i])
//         }else {
//             if(highestVal < duplicates.length) {
//                 highestVal = duplicates.length
//             }
//             strArray.splice(0,1)
//             duplicates = []
//             break
//         }
//     }
// }
// console.log(highestVal)

//BEST SOLUTION

// var lengthOfLongestSubstring = function(s) {
//     const uniqueChars = new Set();
//     let left = 0;
//     let right = left;
//     let maxLength = 0;

//     while(right < s.length) {
//         while(uniqueChars.has(s.charAt(right))) {
//             uniqueChars.delete(s.charAt(left));
//             left++;
//         }

//         uniqueChars.add(s.charAt(right));
//         maxLength = Math.max(maxLength, uniqueChars.size);
//         right++;
//     }
//     console.log(maxLength)
//     return maxLength;
// };

// lengthOfLongestSubstring('dvdf')