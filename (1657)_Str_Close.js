

const closeStrings = (word1,word2) => {

    if(word1.length !== word2.length) return false
    let freq1 = new Array(26).fill(0)
    let freq2 = new Array(26).fill(0)

    for(let i = 0;i < word1.length;i++) {
        freq1[word1.charCodeAt(i) - 97]++
        freq2[word2.charCodeAt(i) - 97]++
    }

    for(let i = 0;i < 26;i++) {
        if((freq1[i] !== 0 && freq2[i] === 0) || (freq1[i] === 0 && freq2[i] !== 0)) {
            return false
        }
    }

    freq1 = freq1.sort((a,b) => a - b) 
    freq2 = freq2.sort((a,b) => a - b)

    for(let i = 0;i < 26;i++) {
        if(freq1[i] !== freq2[i]) {
            return false
        }
    }
    return true
}

closeStrings("abcde","aecdb")


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