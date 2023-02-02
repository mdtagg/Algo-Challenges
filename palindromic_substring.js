/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let palindromes = []
    let highestVal = ''
    let strArray = s.split('')
    while(strArray.length) {
        for(let i = 1;i <= strArray.length;i++) {
            let chars = strArray.slice(0,i)
            let palCheck = strArray.slice(0,i).reverse().join('')
            console.log({chars,palCheck})
            if(chars.join('') === palCheck && highestVal.length < chars.length) {
                // palindromes.push(chars)
                highestVal = chars
            }
        }
        strArray.splice(0,1)
        // break
    }
    // console.log(palindromes)
    console.log(highestVal.join(''))
    // console.log(strArray)
};

longestPalindrome('babad')