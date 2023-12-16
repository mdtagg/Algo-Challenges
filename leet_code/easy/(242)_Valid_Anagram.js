/*

Given two strings s and t, return true if t is an anagram of s,
 and false otherwise.

An Anagram is a word or phrase formed by rearranging the 
letters of a different word or phrase, typically using all 
the original letters exactly once.

*/

const isAnagram = (s,t) => {

    if(s.length !== t.length) return false
    const letterMap = new Map()

    for(let i = 0;i < s.length;i++) {
        letterMap.set(s[i],(letterMap.get(s[i]) || 0) + 1)
    }

    for(let letter in t) {
        if(!letterMap.get(t[letter])) return false;
        else letterMap.set(t[letter],letterMap.get(t[letter]) - 1);
    }
    return true
}

isAnagram("anagram","nagaram")

/*
const isAnagram = (s,t) => {
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")

    return s === t ? true : false
}
*/
// var isAnagram = function(s, t) {
//     const arr = [s,t].map(item => item.split('').sort().join(''))
//     return arr[0] === arr[1] ? true : false    
// };