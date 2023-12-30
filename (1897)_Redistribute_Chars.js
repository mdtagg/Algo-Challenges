

const makeEqual = (words) => {

    let alpha = new Array(26).fill(0)
    let totalWords = words.length

    for(let word of words) {
        for(let letter of word) {
            alpha[letter.charCodeAt(0) - "a".charCodeAt(0)]++
        }
    }
    for(let letter of alpha) {
        if(letter % totalWords !== 0) return false
    }
    return true
}

makeEqual(["caaaaa","aaaaaaaaa","a","bbb","bbbbbbbbb","bbb","cc","cccccccccccc","ccccccc","ccccccc","cc","cccc","c","cccccccc","c"])

/*

const makeEqual = (words) => {
    let wordsMap = {}
    for(let i = 0;i < words.length;i++) {
        for(let j = 0;j < words[i].length;j++) {
            wordsMap[words[i][j]] = (wordsMap[words[i][j]] || 0) + 1
        }
    }
    for(let letter of Object.keys(wordsMap)) {
        if(wordsMap[letter] % words.length !== 0) return false
    }
    return true
}

*/