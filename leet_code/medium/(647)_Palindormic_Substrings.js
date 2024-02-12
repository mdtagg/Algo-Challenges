

const countSubstrings = (s) => {

    let res = 0

    function checkSubStr(start,end) {
        while(start < end) {
            if(s[start++] !== s[end--]) return false 
        }
        return true
    }

    for(let i = 0;i < s.length;i++) {
        for(let j = i;j < s.length;j++) {
            if(checkSubStr(i,j)) res++;
        }
    }
    return res
}

countSubstrings('aaa')

/*
// let set = new Set()
    let left = 0
    let res = 0

    while(left < s.length) {

        let str = ""

        for(let i = left;i < s.length;i++) {
            str += s[i]
            // if(!set.has(str)) {
                if(str === str.split('').reverse().join("")) {
                    set.add(str)
                    res++
                }
            // }
        }
        left++
    }
    return res

if(s.length === 1) return s;

    let set =  new Set()
    let left = 0
    let str = ""
    // let right = 1
    let res = 0
    
    while(left <= s.length) {
        str += s[left]
        if(!set.has(str)) {
            set.add(str)
            res++
        }
        for(let right = left + 1;right < s.length;right++) {
            str += s[left]
        }
        left++
    }
    
*/