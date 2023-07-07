/*

You are given a large integer represented as an integer 
array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant 
in left-to-right order. The large integer does not contain any 
leading 0's.

Increment the large integer by one and return the resulting array 
of digits.

*/


var plusOne = function(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};

console.log(plusOne([8,9,9]))


/*

WHAT I LEARNED

- Be careful if the requirments of the problem have numbers that exceed the max
safe integer 

- BigInt can be used to get those numbers but you have to convert it back to a string

- When you convert it back to a string it loses accuracy if need to conduct further
operations on that number

*/

// return (BigInt(digits.join('')) + BigInt(1)).toString().split('')


// for(let i = digits.length-1; i>=0; i--){
//     if(digits[i] < 9){
//         digits[i]++;
//         return digits;
//     }
//     digits[i] = 0;
// }
// digits.unshift(1);
// return digits;