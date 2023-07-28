var checkInclusion = function(s1, s2) {
        
        if(s1.length > s2.length) return false
        
        const arr1 = Array.from({length:26}, () => 0)
        const arr2 = Array.from({length:26}, () => 0)
        
        matches = 0
        
        for(let i = 0; i<s1.length; i++){
            arr1[s1.codePointAt(i) - 97] += 1
            arr2[s2.codePointAt(i) - 97] += 1
        }
        
        for(let i = 0; i<arr1.length; i++){
            if(arr1[i] === arr2[i]){
                matches++
            }
        }
        
        let l = 0
        
        for(let r = s1.length; r<s2.length; r++){
            if(matches === 26) return true
            let index = s2.codePointAt(r) - 97
            arr2[index]++
            if(arr2[index] === arr1[index]){
                matches++
            }
            
            else if(arr1[index] === arr2[index] - 1){
                matches--
            }
            
            index = s2.codePointAt(l) - 97
            arr2[index]--
            
            if(arr2[index] === arr1[index]){
                matches++
            }
            
            else if(arr1[index] === arr2[index] + 1){
                matches--
            }
            
            l++   
        }
        return matches === 26  
      
    };
    
    const isMatch = (a1, a2) => {
        for (let i = 0; i<a1.length; i++){
            if(a1[i] !== a2[i]) return false
        }
            return true
    } 
checkInclusion('a','b')

/*
PERFORMANCE SOLUTION

var checkInclusion = function(s1, s2) {
//     let str = "a"
//     console.log(str.codePointAt(0))
//     for(let i = 0; i<26; i++){
//         map[String.fromCharCode(97+i)] = 0
//     }
    
    if(s1.length > s2.length) return false
    
    //array is used for keeping track ok letter count
    const arr1 = Array.from({length:26}, () => 0)
    const arr2 = Array.from({length:26}, () => 0)
    
    matches = 0
    
    //get freq count of each letter in s1
    // get freq count of char count in s2 for the window size of s1.length
    
    for(let i = 0; i<s1.length; i++){
        arr1[s1.codePointAt(i) - 97] += 1
        arr2[s2.codePointAt(i) - 97] += 1
    }
    
    //calculate initial matches
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i] === arr2[i]){
            matches++
        }
    }
    
    let l = 0
    
    for(let r = s1.length; r<s2.length; r++){
        if(matches === 26) return true
        let index = s2.codePointAt(r) - 97
        arr2[index]++
        // if char with the correct freq are in both arrs
        if(arr2[index] === arr1[index]){
            matches++
        }
        
        // just made a mismatch by adding
        else if(arr1[index] === arr2[index] - 1){
            matches--
        }
        
        //remove leftmost char of window
        // left end of window index
        index = s2.codePointAt(l) - 97
        arr2[index]--
        
        // if char with the correct freq are in both arrs
        if(arr2[index] === arr1[index]){
            matches++
        }
        
        // just made a mismatch by subtracting
        else if(arr1[index] === arr2[index] + 1){
            matches--
        }
        
        l++   
    }
    return matches === 26  
  
};

const isMatch = (a1, a2) => {
    for (let i = 0; i<a1.length; i++){
        if(a1[i] !== a2[i]) return false
    }
        return true
} 

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