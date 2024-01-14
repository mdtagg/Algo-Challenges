

const closeStrings = (word1,word2) => {
    if(word1.length !== word2.length) return false
    let wordOneArr = new Array(26).fill(0)
    let wordTwoArr = new Array(26).fill(0)

    /*
    [7,3,1...,10]
    []
     */
    for(let i = 0;i < word1.length;i++) {
        wordOneArr[word1.charCodeAt(i) - 97]++
        wordTwoArr[word2.charCodeAt(i) - 97]++
    }

    let letterMap = new Map()
    wordTwoArr = wordTwoArr.filter((item) => item !== 0)

    for(let i = 0;i < 26;i++) {
        if(wordOneArr[i] === 0) continue;
        letterMap.set(wordOneArr[i],(letterMap.get(wordOneArr[i]) || 0) + 1)
    }

    for(let i = 0;i < wordTwoArr.length;i++) {
        
        if(!letterMap.get(wordTwoArr[i])) {
            return false
        }else {
            letterMap.set(wordTwoArr[i],letterMap.get(wordTwoArr[i]) - 1)
        }
    }
    return true
}

closeStrings("uaz","ssx")




























/*
const closeStrings = (word1,word2) => {
    if(word1.length !== word2.length) return false
    let wordOneArr = new Array(26).fill(0)
    let wordTwoArr = new Array(26).fill(0)

    for(let i = 0;i < word1.length;i++) {
        wordOneArr[word1.charCodeAt(i) - 97]++
        wordTwoArr[word2.charCodeAt(i) - 97]++
    }

    let letterMap = new Map()
    wordTwoArr = wordTwoArr.filter((item) => item !== 0)

    for(let i = 0;i < 26;i++) {
        if(wordOneArr[i] === 0) continue;
        letterMap.set(wordOneArr[i],(letterMap.get(wordOneArr[i]) || 0) + 1)
    }

    for(let i = 0;i < wordTwoArr.length;i++) {
        
        if(!letterMap.get(wordTwoArr[i])) {
            return false
        }else {
            letterMap.set(wordTwoArr[i],letterMap.get(wordTwoArr[i]) - 1)
        }
    }
    return true
}
 */

























/*
if(word1.length !== word2.length) return false
    let wordOneArr = new Array(26).fill(0)
    let wordTwoArr = new Array(26).fill(0)

    for(let i = 0;i < word1.length;i++) {
        wordOneArr[word1.charCodeAt(i) - 97]++
        wordTwoArr[word2.charCodeAt(i) - 97]++
    }

    let letterMap = new Map()

    for(let i = 0;i < 26;i++) {
        if(wordOneArr[i] === 0) continue;
        letterMap.set(wordOneArr[i],(letterMap.get(wordOneArr[i]) || 0) + 1)
    }

    for(let i = 0;i < 26;i++) {
        
        if(!letterMap.get(wordTwoArr[i])) {
            return false
        }else {
            letterMap.set(wordTwoArr[i],letterMap.get(wordTwoArr[i]) - 1)
        }
    }
    return true
*/