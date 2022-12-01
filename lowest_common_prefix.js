
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
