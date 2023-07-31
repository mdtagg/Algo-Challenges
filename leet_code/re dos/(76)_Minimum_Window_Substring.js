

var minWindow = function(s, t) {

    const neededChars = {}

    for(let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1
    }

    let neededLength = Object.keys(neededChars).length
    let left = 0
    let right = 0
    let minStr = ""

    while(right < s.length) {
        let currentChar = neededChars[right]
        neededChars[currentChar]--
        if(neededChars[currentChar] === 0) {
            neededLength--
        }
        while(neededLength === 0) {
            if(!minStr || minStr.length > right - left + 1) {
                minStr = s.slice(left,right + 1)
            }
            let leftChar = s[left]
            if(neededChars[leftChar] === 0) {
                neededLength++
            }
            neededChars[leftChar]++
            left++
        }
    }
    return minStr
};
minWindow("ADOBECODEBANC","ABC")


























/*

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
    let visited = {}
    let minStr

    for(let i = 0;i < t.length;i++) {
        visited[t[i]] = 0
    }
    for(let i = 0;i < s.length;i++) {
        if(visited[s[i]] >= 0) {
            stack.push([s[i],i])
            visited[s[i]] += 1
        }
        if(stack.length >= t.length) {
            const [letter,index] = stack.shift()
            let test = Object.values(visited).every(letter => letter === 1)
            visited[letter]--
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
    let visited = {}
    let minStr
    let currentLetter = t[0]

    for(let i = 0;i < t.length;i++) {
        visited[t[i]] = 0
    }

    for(let i = 0;i < s.length;i++) {
        if(visited[s[i]] === 0) {
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