

const countCharacters = (words,chars) => {

    let result = 0
    chars = chars.split('')

    const charMap = new Map()
    chars.forEach(letter => charMap.set(letter,((charMap.get(letter)) || 0) + 1))

    words.forEach(word => {

        const test = new Map(charMap)
        let count = 0

        for(let i = 0;i < word.length;i++) {
            
            if(test.get(word[i]) > 0) {
                test.set(word[i],test.get(word[i]) - 1)
                count += 1
            }
            else return
        }
        if(count === word.length) {
            result += word.length 
        }
    })

    return result
}

console.log(countCharacters(["cat","bt","hat","tree"],"atach"))

/*


let count = 0

    words.forEach(word => {
        for(let i = 0;i < word.length;i++) {
            for(let j = 0;j < chars.length;j++) {
                
            }
        }
        
    })

*/