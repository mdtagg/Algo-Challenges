

const canConstruct = (ransomNote,magazine) => {
    
    const ransomMap = new Map()

    for(let i = 0;i < ransomNote.length;i++) {
        ransomMap.set(ransomNote[i],(ransomMap.get(ransomNote[i]) || 0) + 1)
    }
    for(let i = 0;i < magazine.length;i++) {
        if(ransomMap.has(magazine[i])) {
            ransomMap.set(magazine[i],ransomMap.get(magazine[i]) - 1)
        }
    }
    for(let amt of ransomMap.values()) {
        if(amt > 0) return false
    }
    return true
}

canConstruct("aac","aab")