

const maxLengthBetweenEqualCharacters = (s) => {
    let max = -1
    
    for(let i = 0;i < s.length;i++) {
        let firstIdx = s.indexOf(s[i])
        let lastIdx = s.lastIndexOf(s[i])
        if(firstIdx !== lastIdx && lastIdx !== -1) {
            max = Math.max(max,(lastIdx - firstIdx - 1))
        }
    }
    return max
}

maxLengthBetweenEqualCharacters("abca")