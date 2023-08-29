



class Dictionary {
    constructor(wordsArray) {
        this.dict = wordsArray.join(' ')
    }
    
    isInDict(word) {
        
    }
}



const wordDict = new Dictionary(["cat","sar","bar"])

// wordDict.setUp(["cat","car","bar"])
console.log(wordDict.isInDict("bar"))

/*
class Dictionary {
    constructor(wordsArray) {
        this.dict = wordsArray.join(' ')
    }
    
    isInDict(word) {
        for(let i = 0;i < this.dict.length;i++) {
            let count = 0
            while(this.dict[i] !== ' ') {
                let modulo = i < word.length ? word[i]:  word[(i - 1) % word.length] 
                if(word[i] === '*' || this.dict[i] === modulo) {
                    count++
                }
                i++
            }
            if(count === word.length) return true
        }
        return false
    }
}

for(let i = 0;i < this.dict.length;i++) {
            let count = 0
            while(this.dict[i] !== ' ') {
                let modulo = i < 3 ? word[i]:  word[i % word.length - 1] 
                if(word[i] === '*' || this.dict[i] === modulo) {
                    count++
                }
                i++
            }
            if(count === word.length) return true
            // i++
        }
        return false

class Dictionary {
    constructor(wordsArray) {
        this.dict = wordsArray.join(' ')
    }
    
    isInDict(word) {
       let currentWord = ""
        for(let i = 0;i < this.dict.length;i++) {
            if(this.dict[i] === word[i] || word[i] === "*") {
                currentWord += word[i];
            }
            else {
                currentWord = ""
                while(this.dict[i] !== ' ' && i !== this.dict.length) i++
            }
            if(currentWord.length === word.length) return true
        }
    }
}


class Dict {
    constructor() {
        this.dict = new Set()
    }
    
    isInDict(word) {
        return this.dict.has(word)
    }
}

class Dictionary {
    constructor(wordsArray) {
        this.dict = wordsArray
    }
    
    isInDict(word) {
        while(this.dict.length) {
            const wordToMatch = this.dict.pop()
            for(let i = 0;i < word.length;i++) {
                if(word[i] !== wordToMatch[i] && word[i] !== "*") {
                    break
                }
                if(i === word.length - 1) return true
            }
        }
        return false
    }
}
*/