

const reverseWords = (s) => {
    let word = []
    let result = []
    for(let i = s.length - 1;i >= 0;i--) {
        if(s[i] == ' ' || i - 1 == -1) {
            if(word.length) result.push(word.join(''));
            word = []
            continue 
        }
        word.unshift(s[i])
    }
    return result.join(' ')
}

reverseWords("the sky is blue")

/*
const reverseWords = (s) => {
    s = s.split(" ")
    let arr = []

    for(let i = 0;i < s.length;i++) {
        if(s[i] == "") continue
        let word = s[i].trim()
        arr.push(word)
    }
    let test = arr.join(' ')
    return arr.reverse().join(' ')
}
*/