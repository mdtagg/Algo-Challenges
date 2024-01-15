
const isIsomorphic = (s, t) => {

    const sMap = new Map()
    const tMap = new Map()
    let newStr = ""

    for(let i = 0;i < s.length;i++) {
        if(sMap.has(s[i])) {
            newStr += sMap.get(s[i])
        }else {
            if(tMap.has(t[i])) {
                return false
            }
            sMap.set(s[i],t[i])
            tMap.set(t[i],s[i])
            newStr += t[i]
        }
    }
  };


isIsomorphic("egg","add")

/*
        // if((sMap.get(s[i]) || sMap.get(t[i])) && sMap.get(t[i]) !== s[i]) return false

const isIsomorphic = (s, t) => {
    const sMap = new Map();
    const tMap = new Map();
    let newS = "";
  
    for (let i = 0; i < s.length; i++) {
      const sChar = s[i];
      const tChar = t[i];
  
      if (sMap.has(sChar)) {
        newS += sMap.get(sChar);
      } else {
        if (tMap.has(tChar)) {
          return false;
        }
  
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
        newS += tChar;
      }
    }
  
    return newS === t;
  };


var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    // Otherwise return true...
};


*/