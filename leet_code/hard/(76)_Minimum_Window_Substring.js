

var minWindow = function(s, t) {

    if(t.length > s.length) return ''

    const visited = {}

    for(let char of t) {
        visited[char] = (visited[char] || 0) + 1
    }

    let left = 0
    let right = 0
    let neededLength = Object.keys(visited).length
    let minStr = ''

    while(right < s.length) {
        let currentChar = s[right]
        visited[currentChar]--

        if(visited[currentChar] === 0) neededLength--;
        while(neededLength === 0) {
            if(!minStr || right - left + 1 < minStr.length) {
                minStr = s.slice(left,right + 1)
            }
            let leftChar = s[left]
            if(visited[leftChar] === 0) {
                neededLength++
            }
            visited[leftChar]++
            left++
        }
        right++
    }
    return minStr
};
minWindow("ADOBECODEBANC","ABC")


























/*

REDOS 3

var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    
    const neededChars = {};
    
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(neededChars).length;
    let substring = '';
    
    while (right < s.length) {
        const rightChar = s[right];
        neededChars[rightChar]--;
        if (neededChars[rightChar] === 0) neededLength--;
        
        while (neededLength === 0) {
            if (!substring || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
            
            const leftChar = s[left];
            if (neededChars[leftChar] === 0) {
                neededLength++;
            }
            neededChars[leftChar]++;
            left++;
               
        }
        
        right++;
    }
    
    return substring;
};

if(t.length > s.length) return ''
    let stack = []
    let neededChars = {}
    let minStr

    for(let i = 0;i < t.length;i++) {
        neededChars[t[i]] = 0
    }
    for(let i = 0;i < s.length;i++) {
        if(neededChars[s[i]] >= 0) {
            stack.push([s[i],i])
            neededChars[s[i]] += 1
        }
        if(stack.length >= t.length) {
            const [letter,index] = stack.shift()
            let test = Object.values(neededChars).every(letter => letter === 1)
            neededChars[letter]--
            if(test) {
                let subStr = s.slice(index,i + 1)
                if(!minStr) {
                    minStr = subStr
                }
                if(minStr.length > subStr.length) {
                    minStr = subStr
                }
            }
        }
    }
    return minStr ? minStr : ''

let test = []
    const stack = []
    let neededChars = {}
    let minStr
    let currentLetter = t[0]

    for(let i = 0;i < t.length;i++) {
        neededChars[t[i]] = 0
    }

    for(let i = 0;i < s.length;i++) {
        if(neededChars[s[i]] === 0) {
            stack.push([s[i],i])
        }
        
        if(stack.length >= t.length && currentLetter === s[i]) {
            const [letter,index] = stack.shift()
            let test = s.slice(index,i + 1)
            if(!minStr) {
                minStr = test
            }else {
                if(minStr.length > test.length) {
                    minStr = test
                }
            }
            currentLetter = letter
        }

    }

stack.length >= t.length
*/