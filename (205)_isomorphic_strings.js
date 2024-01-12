

const isIsomorphic = (s,t) => {

    let sMap = new Map()
    let tMap = new Map()

    for(let i = 0;i < s.length;i++) {
        sMap.set(s[i],(sMap.get(s[i])) || 0 + 1)
        tMap.set(t[i],(tMap.get(t[i])) || 0 + 1)
    }
   
}

isIsomorphic("egg","add")