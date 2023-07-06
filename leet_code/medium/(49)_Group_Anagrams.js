

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

console.log(groupAnagrams(["a"]))