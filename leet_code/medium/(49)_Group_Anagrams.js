

var groupAnagrams = function(strs) {

    let strMap = new Map()

    for(let i = 0;i < strs.length;i++) {

        let sortedStr = strs[i].split("").sort().join("")

        !strMap.has(sortedStr) ? 
        strMap.set(sortedStr,[strs[i]]) : 
        strMap.set(sortedStr,[...strMap.get(sortedStr),strs[i]])
    }
    return Array.from(strMap.values())
};

console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]))

/*
var groupAnagrams = function(strs) {
    const map = new Map()
    const anagrams = []

    strs.forEach(str => {
        const newStr = str.split('').sort().join('')
        if(map.has(newStr)) {
            const test = map.get(newStr)
            map.set(newStr,[...test,str])
        }else {
            map.set(newStr,[str])
        }
    })
    for(let key of map) {
        const [,value] = key 
        anagrams.push(value)
    }
    return anagrams
};
*/