
var checkInclusion = (s1,s2) => {

    
} 

checkInclusion('ab','eidbaooo')

/*
PERFORMANCE SOLUTION

if(s1.length > s2.length) return false
    
    const arr1 = Array.from({length: 26}, () => 0)
    const arr2 = Array.from({length: 26}, () => 0)
    
    for(let i =0; i<s1.length; i++){
        arr1[s1.codePointAt(i) - 97]++
        arr2[s2.codePointAt(i) - 97]++
    }
    
    let l = 0
    for(let r= s1.length; r<s2.length; r++){
        if(isMatch(arr1, arr2)) return true
        
        arr2[s2.codePointAt(r) - 97]++
        arr2[s2.codePointAt(l) - 97]--
        
        l++
    }
    
    return isMatch(arr1, arr2)
}

const isMatch = (a1, a2) => {
    for (let i = 0; i<a1.length; i++){
        if(a1[i] !== a2[i]) return false
    }
        return true

INITIAL SOLUTION

let left = 0
    let right = 0
    let sortedStr = s1.split('').sort().join('')

    while(right < s2.length) {
        right = left + s1.length
        let str = s2.slice(left,right).split('').sort().join('')
        if(sortedStr === str) return true
        else {
            left++
        }
    }
    return false

*/