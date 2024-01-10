

function minWindow(s, t) {

    const visited = {}
    let neededChars = 0
    let result = ""
    let minWindow = s.length
    let left = 0
    
    for(let i = 0;i < t.length;i++) {
        visited[t[i]] = (visited[t[i]] || 0) + 1
        neededChars++
    }

    for(let right = 0;right < s.length;right++) {

        if(visited[s[right]] > 0) {
            neededChars--
        }
        visited[s[right]] = (visited[s[right]] || 0) - 1

        while(neededChars === 0) {

            if(right - left + 1 < minWindow) {
                result = s.substring(left,right + 1)
                minWindow = result.length
            }
            visited[s[left]]++
            if(visited[s[left]] > 0) neededChars++;
            left++
            
        }
    }
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
minWindow("ADOBECODEBANC","ABC")

/*



function minWindow(s, t) {
    const charCount = {};
    let requiredChars = 0;
    let left = 0;
    let minWindowSize = Infinity;
    let minWindowStart = 0;

    // Count the characters in string t
    for (const char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
        requiredChars++;
    }

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];

        // Check if the current character is required
        if (charCount[rightChar] > 0) {
            requiredChars--;
        }

        // Decrease the count of the current character in the window
        charCount[rightChar] = (charCount[rightChar] || 0) - 1;

        // Check if all required characters are present in the window
        while (requiredChars === 0) {
            // Update the minimum window size and starting index
            if (right - left + 1 < minWindowSize) {
                minWindowSize = right - left + 1;
                minWindowStart = left;
            }

            // Move the left pointer to shrink the window
            const leftChar = s[left];
            charCount[leftChar]++;
            if (charCount[leftChar] > 0) {
                requiredChars++;
            }

            left++;
        }
    }

    return minWindowSize === Infinity ? "" : s.substr(minWindowStart, minWindowSize);
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""

var minWindow = function(s, t) {

    let result 
    let minStr = ""
    let alphaMap = new Map()
    let count = t.length
    let stack = []

    for(let i = 0;i < t.length;i++) {
        alphaMap.set(t[i],(alphaMap.get(t[i])) || 0 + 1)
        stack.push(t[i])
    }
    for(let i = 0;i < s.length;i++) {
        minStr += s[i]
        if(alphaMap.get(s[i])) {
            if(alphaMap.get(s[i]) === 0) {
                alphaMap = new Map(alphaMap)
                count = t.length
            }
            alphaMap.set(s[i],alphaMap.get(s[i]) - 1)
            count--
            if(count === 0) {
                stack.push(stack.shift())
                alphaMap.set(temp,alphaMap.get(stack[stack.length - 1]) + 1)

                result = !result ? minStr : 
                result.length > minStr.length ? minStr : 
                result

                count++
                min
            }
        }
    }
    
};

minStr += s[i]
        if(alphaMap.get(s[i])) {
            if(alphaMap.get(s[i]) === 0) {
                alphaMap = new Map(alphaMap)
                count = t.length
            }
            alphaMap.set(s[i],alphaMap.get(s[i]) - 1)
            count--
            if(count === 0) {
                result = !result ? minStr : 
                result.length > minStr.length ? minStr : 
                result

                count = t.length
                min
            }
        }

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
*/


























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