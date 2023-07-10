/*

A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include 
letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

const isPalindrome = (s) => {
    const regex = /[a-z0-9]/
    s = s.toLowerCase().split('').filter(letter => regex.test(letter)).join('')
    const reversedS = s.split('').reverse().join('')
    return s === reversedS
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))