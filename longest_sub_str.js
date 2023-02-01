/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '') return 0
    let strArray = s.split('')
    let duplicates = []
    let longestStr = []
    let str = []
    while(strArray.length) {
        for(let i = 0;i < strArray.length;i++) {
            if(!duplicates.includes(strArray[i])) {
                duplicates.push(strArray[i])
                str.push(strArray[i])
            }else {
                longestStr.push(str)
                str = []
                strArray.splice(0,1)
                duplicates = []
                break
            }
        }
    }
    longestStr = Math.max(...longestStr.map(item => item.length))
    
};

lengthOfLongestSubstring('dvdf')