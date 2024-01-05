

var findSubstring = function(s, words) {
    let wordLength = words[0].length;
    let windowSize = wordLength * words.length;
    let wordCount = new Map();
    let result = [];

    // Initialize word counts
    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let i = 0; i < wordLength; i++) { // This loop is to offset the starting point
        let left = i;
        let right = i;
        let currentCount = new Map();

        while (right + wordLength <= s.length) {
            let word = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordCount.has(word)) {
                currentCount.set(word, (currentCount.get(word) || 0) + 1);

                // Move left pointer to maintain the window size constraint
                while (currentCount.get(word) > wordCount.get(word)) {
                    let leftWord = s.substring(left, left + wordLength);
                    currentCount.set(leftWord, currentCount.get(leftWord) - 1);
                    left += wordLength;
                }

                // If the window size is the same as total length of words, record the result
                if (right - left === windowSize) {
                    result.push(left);
                }
            } else {
                // If the word is not in words, reset counters and move left pointer
                currentCount.clear();
                left = right;
            }
        }
    }

    return result;
};

findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"])

/*
function findSubstring(s,words) {

    let wordLen = words[0].length 
    let left = 0
    let right = wordLen
    let result = []

    let wordsMap = new Map()
    for(let i = 0;i < words.length;i++) {
        wordsMap.set(words[i],(wordsMap.get(words[i]) || 0) + 1)
    }

    while(right <= s.length) {
        let substr = s.substring(left,right)
        if(words.includes(substr)) {

            if(words.length == 1) result.push(left);
            
            let newMap = new Map(wordsMap)
            let j = right 
            let k = right + wordLen
            newMap.set(substr,newMap.get(substr) - 1)
            let amt = 1

            while(k <= s.length) {
                let substr = s.substring(j,k)
                if(words.includes(substr)) {
                    if(newMap.get(substr) === 0) break
                    newMap.set(substr,newMap.get(substr) - 1)
                    amt++
                }else break
                if(amt === words.length) result.push(left)
                j += wordLen 
                k += wordLen
            } 
        }
        left++
        right++
    }
    return result
}

function findSubstring(s,words) {

    const result = []
    const wordLength = words[0].length 
    let windowLength = wordLength * words.length

    let i = 0
    while(windowLength <= s.length) {

        const wordCounts = new Map()
        words.forEach(word => wordCounts.set(word,(wordCounts.get(word) || 0) + 1))

        const strWindow = s.slice(i,windowLength)
        for(let i = 0;i < strWindow.length;i += wordLength) {
            const substr = strWindow.slice(i,i + wordLength)
            if(wordCounts.has(substr)) {
                wordCounts.set(substr,wordCounts.get(substr) - 1)
            }else {
                break
            }
        }
        let test = false
        for(let val of wordCounts.values()) {
            if(val !== 0) {
                test = true 
                break
            }
        }
        if(!test) result.push(i)
        i++
        windowLength++
    }
    return result
}

const result = []
    const wordCounts = new Map()
    const letterMap = new Map()
    words.forEach(word => {
        const firstLetter = word[0]
        wordCounts.set(word,(wordCounts.get(word) || 0) + 1)
        letterMap.set(firstLetter,letterMap.has(firstLetter) ? [...letterMap.get(firstLetter),word.length] : [word.length])

    })
    // console.log(wordCounts,letterMap)
    for(let i = 0;i < s.length;i++) {
        if(letterMap.has(s[i])) {
            letterMap.get(s[i])
        }
    }


const wordMap = new Map()

    words.forEach(word => {
        const firstLetter = word[0]
        const amtMap = new Map()

        wordMap.set(firstLetter, amtMap.set(word,(amtMap.get(word) || 0) + 1))
    })
    // console.log(wordMap)
    for(let i = 0;i < s.length;i++) {
        if(wordMap.has(s[i])) {
            wordMap.get(s[i]).get()
        }
    }



const result = []
    const indexes = []
    const wordMap = new Map()
    const wordAmt = new Map()

    words.forEach(entry => {
        const firstLetter = entry[0]
        wordMap.set(firstLetter,wordMap.has(firstLetter) ? wordMap.get(firstLetter).push(entry) : [entry])
        wordAmt.set(entry,wordAmt.has(entry) ? wordAmt.get(entry) + 1 : 1)
    })

    for(let i = 0;i < s.length;i++) {
        if(wordMap.has(s[i])) {

            wordMap.get(s[i]).forEach(word => {
                const substr = s.slice(i,i + word.length)
                if(substr === word) {
                    indexes.push(i)
                    i = word.length - 1
                    return
                    // amt++
                }
            })
        }else {

            // if(amt === words.length) {
            //     result.push(indexes[0])
            //     i = indexes[1]
            // }
        }
    }
*/