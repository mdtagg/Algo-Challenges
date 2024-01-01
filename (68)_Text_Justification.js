

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

fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)