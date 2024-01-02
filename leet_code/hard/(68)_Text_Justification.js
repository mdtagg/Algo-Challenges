

const fullJustify = (words,maxWidth) => {

    let row = []
    let wordLengths = 0
    let result = []

    for(let i = 0;i < words.length;i++) {
        wordLengths += words[i].length + 1
        row.push(words[i])
        if(!words[i + 1]) {
            let word = ""
            wordLengths -= row.length
            while(row.length) {
                word += row.shift()
                if(word.length < maxWidth) word += ' ';
            }
            if(word.length !== maxWidth) word += ' '.repeat(maxWidth - word.length)
            result.push(word)
        }
        else if(wordLengths + words[i + 1].length - 1 >= maxWidth) {

            wordLengths -= row.length
            let spacesLeft = maxWidth - wordLengths
            let numSpaces = (row.length - 1 || 1)
            let word = ''

            while(numSpaces > 0) {
                let mid = Math.ceil(spacesLeft / numSpaces)
                word += row.shift() + ' '.repeat(mid);
                spacesLeft -= mid
                numSpaces--
            }
            if(row.length) word += row.pop()
            result.push(word)
            row = []
            wordLengths = 0
        }
    }
    return result
}

fullJustify(["What","must","be","acknowledgment","shall","be"],16)

/*
const fullJustify = (words,maxWidth) => {

    let row = []
    let wordLengths = 0
    let result = []

    for(let i = 0;i < words.length;i++) {
        let blanks = []
        wordLengths += words[i].length + 1
        row.push(words[i])
        if(!words[i + 1]) {
            let word = ""
            wordLengths -= row.length
            let rowLen = row.length
            while(row.length) {
                word += row.shift() + ' '
            }
            word += ' '.repeat(maxWidth - wordLengths - rowLen)
            result.push(word)
        }
        else if(wordLengths + words[i + 1].length - 1 >= maxWidth) {
            wordLengths -= row.length
            let spacesLeft = maxWidth - wordLengths
            let mid = Math.floor(spacesLeft / 2) > 0 ? Math.floor(spacesLeft / 2) : 1
            while(spacesLeft > 0) {
                if(spacesLeft > mid) blanks.push(" ".repeat(mid));
                else blanks.push(" ".repeat(spacesLeft))
                spacesLeft -= mid 
            }
            let word = row.shift()
            let lastWord = row.pop()
            while(blanks.length || row.length) {
                if(row.length && row.length >= blanks.length) word += row.shift()
                if(blanks.length) word += blanks.shift()
            }
            if(lastWord) result.push(word + lastWord)
            else result.push(word)
            row = []
            wordLengths = 0
        }
    }
    return result
}



const fullJustify = (words,maxWidth) => {

    let result = []
    let row = []
    let blankSpaces = []
    let maxWords = 0
    let wordCount = 0

    for(let i = 0;i < words.length;i++) {
        let blanks = 0
        maxWords += words[i].length + 1
        wordCount += words[i].length
        row.push(words[i])

        if(maxWords > maxWidth) {
            let test = row.pop()
            wordCount -= test.length
            blanks = maxWidth - wordCount
            i--
        
        while(blanks > 0) {
            let mid = Math.ceil(blanks / 2)
            if(blanks >= mid) blankSpaces.push(' '.repeat(mid));
            else blankSpaces.push(' '.repeat(blanks))
            blanks -= mid
        }
        
        let word = ""
        for(let i = 0;i < blankSpaces.length;i++) {
            word += row[i] + blankSpaces[i]
        }
        word += row[row.length - 1]
        result.push(word)
        row = []
        blankSpaces = []
        maxWords = 0
        wordCount = 0
    }
    }
    let word = ""
    for(let i = 0;i < row.length;i++) {
        word += row[i] + " "
        wordCount++
    }
    word += " ".repeat(maxWidth - wordCount)
    result.push(word)

    return result
}

*/