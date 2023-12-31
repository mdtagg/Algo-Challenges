

const reverseWords = (s) => {
    return s.split(' ').filter((word) => word.trim()).reverse().join()
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