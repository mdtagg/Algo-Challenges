/*
You are given a string s and an integer k. 
You can choose any character of the string 
and change it to any other uppercase English
 character. You can perform this operation 
 at most k times.

Return the length of the longest substring 
containing the same letter you can get after
 performing the above operations.

*/

const characterReplacement = (s, k) => {

    let left = 0
    let right = 0
    let maxCharCount = 0
    const visited = {}
    
    while(right < s.length) {
        visited[s[right]] = (visited[s[right]] || 0) + 1
        if(visited[s[right]] > maxCharCount) maxCharCount = visited[s[right]]
        if(right - left + 1 - maxCharCount > k) {
            visited[s[left]]--
            left++
        }
        right++
    }
    return right - left
};

console.log(characterReplacement("AAAAB",2))















/*
INITIAL SOLUTION

let left = 0
    let right = 0
    let maxCharCount = 0
    const visited = {}
    
    while(right < s.length) {
        const char = s[right]
        visited[char] = (visited[char] || 0) + 1

        if(visited[char] > maxCharCount) maxCharCount = visited[char];

        if(right - left + 1 - maxCharCount > k) {
            visited[s[left]]--
            left++
        }
        right++
    }
    return right - left



let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};
  
    while (right < s.length) {
      const char = s[right];
      visited[char] = visited[char] ? visited[char] + 1 : 1;
  
      if (visited[char] > maxCharCount) maxCharCount = visited[char];
  
      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--;
        left++;
      }
  
      right++;
    }
  
    return right - left;

let map = Array(26).fill(Infinity)
    let left = 0
    let right = 0
    let longest = 0
    
    while(right < s.length) {
        let idx = s.charCodeAt(right) - 65
        map[idx] = map[idx] === Infinity ? 1 : map[idx] + 1
        let min = Math.min(...map)
        if(k - min < 0) {
            let idx = s.charCodeAt(left) - 65
            map[idx] -= 1
            left++
        }
        longest = Math.max(longest,(right - left) + 1)
        right++
    }
    return longest

//key is the longest substring is going to be the size of the window
      let letterMap = []
      let longest = 0
      let left = 0
      let right = 0

      while(right < s.length) {
        let idx = s.charCodeAt(right)
        letterMap[idx] = (letterMap[idx] || 0) + 1
        console.log(letterMap)
        right++
      }

if(letterMap.has(s[right])) {
            letterMap.set(s[right],letterMap.get(s[right]) + 1)
        }else {
            letterMap.set(s[right],1)
        }
        
        if(k - letterMap.get(s[right]) === 0) {
            
            left++
        }
        right++

let idx = s.charCodeAt(right) - 65
        letterMap[idx] = (letterMap[idx] || 0) + 1
        console.log(letterMap)
        if(longest < (right - left) + 1) {
            longest = right - left
        }
        console.log(Math.min(...letterMap))
        if(k - Math.min(...letterMap) === 0) {
            break
        }
        right++

var map = [26]
    let largestCount = 0, beg = 0, maxlen = 0;
    for(let end = 0; end < s.length; end++){
        const c = s[end]
        map[c] = (map[c] || 0) + 1
        largestCount = Math.max(largestCount, map[c])
        if(end - beg + 1 - largestCount > k){ 
            map[s[beg]] -= 1
            beg += 1
        }
        maxlen = Math.max(maxlen, end - beg + 1); 
    }
    return maxlen;    

for(let i = 0;i < s.length;i++) {
        let right = i
        if(letterMap.has(s[right])) {
           letterMap.set(s[right],letterMap.get(s[right]) + 1)
        }else {
            letterMap.set(s[right],1)
        }
        
    }
    console.log(letterMap)

let longest = 0
    const letterMap = new Map()

    for(let i = 0;i < s.length;i++) {
        let right = i
        if(letterMap.has(s[right])) {
           letterMap.set(s[right],letterMap.get(s[right]) + 1)
        }else {
            letterMap.set(s[right],1)
        }

    }
    console.log(letterMap)

let longest = 0
    for(let i = 0;i < s.length;i++) {

        let right = i + 1
        let newStr = [s[i]]
        let replacements = k

        while(replacements >= 0 && right < s.length) {
            if(replacements === 0 && !newStr.includes(s[right])) {
                break
            }
            if(!newStr.includes(s[right])) {
                newStr.push(s[i])
                replacements--
            }else {
                newStr.push(s[right])
            }
            right++
        }
        if(longest < newStr.length) {
            longest = newStr.length
        }
    }
    return longest


s = s.split('').sort()
    // let newStr = []
    console.log(s)
    for(let i = 0;i < s.length;i++) {
        let currentLetter = s[i]
        let nextLetter = 1
        let newStr = [currentLetter]
        while(k > 0) {
            
        }
    }

*/