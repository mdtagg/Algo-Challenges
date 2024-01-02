/*

A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include 
letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let rev = str.split("").reverse().join("");
    return (str == rev) ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))

/*
const isPalindrome = (s) => {

    let alphaSet = new Set()
    let goodChars = "0123456789abcdefghijklmnopqrstuvwxyz"
    let pal = ""

    for(let i = 0;i < goodChars.length;i++) {
        alphaSet.add(goodChars[i])
    }
    for(let i = 0;i < s.length;i++) {
        let lower = s[i].toLowerCase()
        if(alphaSet.has(lower)) pal += lower;
    }

    return pal === pal.split("").reverse().join("") ? true : false
}


const isPalindrome = (s) => {

    let result = ""
    let reversed = []

    for(let i = 0;i < s.length;i++) {
        let lower = s[i].toLowerCase()
        let lowerCode = lower.charCodeAt(0)
        if((lowerCode >= 97 && lowerCode <= 122) || (lowerCode >= 48 && lowerCode <= 57)) {
            result += lower;
            reversed.unshift(lower)
        }
    }
    return result === reversed.join('') ? true : false
}



const isPalindrome = (s) => {
    const regex = /[a-z0-9]/
    s = s.toLowerCase().split('').filter(letter => regex.test(letter)).join('')
    const reversedS = s.split('').reverse().join('')
    return s === reversedS
}
*/