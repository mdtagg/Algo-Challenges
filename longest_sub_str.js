/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === "") return 0
    if(s.length === 1) return 1
    let longestStr = []
    let highestLen = []
    s = s.split('')
    let str = []
    for(let i = 0;i < s.length;i++) {
        if(!str.includes(s[i])) {
            str.push(s[i])
            highestLen.push(str.length)
        }else {
            longestStr.push(str)
            str = []
            str.push(s[i])
        }
    }
    console.log(longestStr)
    return Math.max(...highestLen)
};

lengthOfLongestSubstring('dvdf')