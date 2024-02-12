

var longestCommonSubsequence = function(text1, text2) {
   
    const length1 = text1.length;
    const length2 = text2.length;
    const dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(0));

    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[length1][length2];
}

longestCommonSubsequence("abccde","aced")

/*

PSUEDO CODE 

initialize a new array with the length of the first string (rows)
fill each row with a new array with the length of the second string (cols)
and fill with 0s

nested for loop starting at index 1
    if the char in text1 at the current index - 1 is equal to the char at
    the current index in the second string - 1
        set the value of the current index in the dp array to its value + 1
    if it isnt set the value of the dp array to the max between the value 
    above it or the value next to it

return the value at the index of the length the first string at the length 
of the second strings value

EXPLANATION 

We are creating a new array with the length of the strings to keep track 
of what values match and where. 

when the values match is the only time we directly increase a value in the array

when the values dont match 

const longestCommonSubsequence = (text1,text2) => {
    let longestSubstr = ""
    let text1Map = new Map()
    let text2Map = new Map()

    for(let i = 0;i < text1.length;i++) {
        let text1Char = text1[i]
        let text2Char = text2[i]
        if(text1Char) text1Map.set(text1Char,[(text1Map.get(text1Char) || 0) + 1,i])
        if(text2Char) text2Map.set(text2Char,[(text2Map.get(text2Char) || 0) + 1,i])
    }

    let i = 0

    while(i < text1.length || i < text2.length) {
        let text1Char = text1Map.get(text1[i])
        let text2Char = text2Map.get(text2[i])
        if(text1Char > 0 && text2Char > 0) {
            text1Map.set(text1[i],text1Char - 1)
            text2Map.set(text1[i],text2Char - 1)
            if(text1Char) longestSubstr += text1Char 
            else longestSubstr += text2Char
        }
        i++
    }
}
*/