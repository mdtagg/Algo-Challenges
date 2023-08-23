

const mostFrequent = (str) => {

    str = str.toLowerCase().split(' ')
    let uniqueWords = new Map()
    const regex = /^[a-z']*[a-z](?:'[a-z])*[a-z']*$/
    let high = mid = low = 0
    let first,middle,last

    for(let i = 0;i < str.length;i++) {
        if(!regex.test(str[i])) {
            str[i] = str[i].split('').filter(character => regex.test(character)).join('')
        }
        if(str[i]) {
            uniqueWords.set(str[i], (uniqueWords.has(str[i]) ? uniqueWords.get(str[i]) : 0) + 1)
            let currentWordCount = uniqueWords.get(str[i])
            if(currentWordCount > high) {
                high = currentWordCount 
                first = str[i]
            }else if(currentWordCount > mid) {
                mid = currentWordCount
                middle = str[i]
            }else if(currentWordCount > low) {
                low = currentWordCount 
                last = str[i]
            }
        }

    }
    
    
    return uniqueWords
}

console.log(mostFrequent("a a a  b  c c  d d d d  e e e e e"))

/*

// let keys = uniqueWords.keys()
    // let max = mid = low = 0
    // let top,middle,start
    // for(let key of keys) {
    //     if(uniqueWords.get(key) > max) {
    //         max = uniqueWords.get(key)
    //         top = key
    //     }else if(uniqueWords.get(key) > mid) {
    //         mid = uniqueWords.get(key)
    //         middle = key
    //     }else if(uniqueWords.get(key) > low) {
    //         low = uniqueWords.get(key)
    //         start = key
    //     }
    // }
// let currentWordNumber = uniqueWords.get(str[i])


        // if(currentWordNumber >= high) {
        //     high = str[i]
        // }else if(currentWordNumber < high && currentWordNumber > low) {
        //     mid = str[i]
        // }else if(currentWordNumber > low) {
        //     low = str[i]
        // }
        // if(str[i]) uniqueWords.has(str[i]) ? uniqueWords.set(str[i],uniqueWords.get(str[i]) + 1) : uniqueWords.set(str[i],1)
map.has(str[i]) ? map.set(str[i],map.get(str[i]) + 1) : map.set(str[i],1)

CODE GRAVEYARD

console.log(str.split(' '))
    str = str.toLowerCase()
    let map = new Map()
    let word = ""
    let result = []
    // let regex = /^[a-z']*[a-z](?:'[a-z])*[a-z']*$/
    let regex = /[a-z]/
    let i = 0

    for(let i = 0;i < str.length;i++) {
        if(str[i] === ' ' || i === str.length - 1) {
            map.has(word) ? map.set(word,map.get(word) + 1) : map.set(word,1)
            word = ''
            while(str[i] === ' ') i++;
            i--
        }else {
            if(regex.test(str[i]) || str[i] === "'") word+=str[i];
        }
    }
    let iterator = map.keys()
    for(let key of iterator) {
        if(result.length === 3) break
        result.push(key)
    }
    console.log(map)
    return result

for(let i = 0;i < str.length;i++) {
        if(str[i] === ' ') {
            map.has(word) ? map.set(word,map.get(word) + 1) : map.set(word,1)
            word = ''
            while(str[i] === ' ') i++;
            i--
        }else {
            if(regex.test(str[i]) || str[i] === "'") word+=str[i];
        }
    }
    let iterator = map.keys()
    for(let key of iterator) {
        if(result.length === 3) break
        result.push(key)
    }
    console.log(map)
    return result

//     if(str[i] === ' ') {
    //         map.has(word) ? map.set(word,map.get(word) + 1) : map.set(word,1)
    //         word = ''
    //     }
    //     else {
    //         if(regex.test(str[i]) || str[i] === "'") {
    //             word += str[i]
    //         }else {
    //             word = ''
    //             while(str[i] !== ' ') i++;
    //             i++
    //         }
    //     }
    // }

if(regex.test(str[i]) || str[i] === "'") {
                if(map.has(str[i])) {
                    map.set(str[i],map.get(str[i]) + 1)
                }else {
                    map.set(str[i],0)
                }
            }

if(map.has(arr[i])) {
            map.set(arr[i],map.get(arr[i]) + 1)
        }else {
            map.set(arr[i],1)
        }
 */