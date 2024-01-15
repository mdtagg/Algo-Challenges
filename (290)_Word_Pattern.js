

const wordPattern = (pattern,s) => {
    s = s.split(" ")
    if(pattern.length !== s.length) return false
    let patternMap = new Map()
    let sMap = new Map()

    for(let i = 0; i < s.length;i++) {
        if(!patternMap.has(pattern[i])) {
            if(sMap.has(s[i])) return false
            patternMap.set(pattern[i],s[i])
            sMap.set(s[i],pattern[i])
        }
        else if(patternMap.get(pattern[i]) !== s[i]) return false
    }
    return true
}

wordPattern("abba","dog dog dog dog")