/**
 * @param {string} s
 * @return {number}
 */

/*
Given a string s, find the length of the longest 
substring without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    // if(s === '') return 0
    let strArray = s.split('')
    let duplicates = []
    let highestVal = 0
    while(strArray.length) {
        for(let i = 0;i < strArray.length;i++) {
            if(!duplicates.includes(strArray[i])) {
                duplicates.push(strArray[i])
            }else {
                if(highestVal < duplicates.length) {
                    highestVal = duplicates.length
                }
                strArray.splice(0,1)
                duplicates = []
                break
            }
        }
    }
    console.log(highestVal)
};

//BEST SOLUTION

var lengthOfLongestSubstring = function(s) {
    const uniqueChars = new Set();
    let left = 0;
    let right = left;
    let maxLength = 0;

    while(right < s.length) {
        while(uniqueChars.has(s.charAt(right))) {
            uniqueChars.delete(s.charAt(left));
            left++;
        }

        uniqueChars.add(s.charAt(right));
        maxLength = Math.max(maxLength, uniqueChars.size);
        right++;
    }
    console.log(maxLength)
    return maxLength;
};

lengthOfLongestSubstring('dvdf')