

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

findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"])

/*
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