
/* Write a function to find the longest common prefix string 
amongst an array of strings. If there is no common prefix, 
return an empty string "". */

function longestCommonPrefix(strs) {
    if (strs.length == 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            console.log(prefix)
            if (prefix === "") return "";
        }        
    }
    console.log(prefix)
    return prefix;
}

longestCommonPrefix(['c','cc','ccc'])

/* First for loop is saying compare each word 
to the first word 
The while loop is saying run until the word we are on matches prefix
Line 9 is taking a letter off of the first word on each iteration
When enough letters are taken off prefix matches the word were on */


/* 
WHAT I LEARNED 

-.indexOf returns -1 if there is no match. This can be used with a 
conditional statement in problems that require reducing something down.

-while loops dont need a counting variable to terminate, a conditional statement 
paired with a changing variable can also be used. 

-if statements dont need brackets if the return is one line long

The right way to look at this challenge is through the lens of reduction. 
Ultimately we want to see what the shortest common prefix is so our return 
value is either going to be equal to or less than the shortest word in the 
list. This means we can set a variable to be the first entry in the list 
and then compare each other entry against it to find a common trait. 
Similar to finding the max or min value in a list of numbers. 

*/