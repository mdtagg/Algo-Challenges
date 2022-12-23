function generateHashtag (str) {
    if(str.trim().length === 0) return false
    let newStr = str.trim().split(' ')
    for(let i = 0;i < newStr.length;i++) {
        if(newStr[i] === '') {
            newStr.splice(i,1)
            i -= 1
        }
    }
    if(newStr[0] !== '#') {
        newStr.unshift('#')
    }
    for(let i = 1;i < newStr.length;i++) {
        let word = newStr[i].split('')
        word[0] = word[0].toUpperCase()
        newStr[i] = word.join('')
    }
    newStr = newStr.join('')
    if(newStr.length > 140) return false 
    console.log(newStr)
    
}

generateHashtag("code" + " ".repeat(140) + "wars")

