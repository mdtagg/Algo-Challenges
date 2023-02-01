/* Given an integer x, return true if x is a palindrome, and false otherwise.*/

var isPalindrome = function(x) {
    let stringX = x.toString()
    let stringReverse = x.toString().split('').reverse().join('')
    return stringX === stringReverse ? true : false
  };


/* 

WHAT I LEARNED

-methods can be chained as long as the data types are correct after the changes


*/