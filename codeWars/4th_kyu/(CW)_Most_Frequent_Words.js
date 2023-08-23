

const topThreeWords = (str) => {

    str = str.toLowerCase().split(' ')
    let uniqueWords = new Map()
    const regex = /^[a-z']*[a-z](?:'[a-z])*[a-z']*$/
    
    for(let i = 0;i < str.length;i++) {
        if(!regex.test(str[i])) {
            str[i] = str[i].split('').filter(character => regex.test(character)).join('')
        }
        if(str[i]) {
            uniqueWords.set(str[i], (uniqueWords.has(str[i]) ? uniqueWords.get(str[i]) : 0) + 1)
        }
    }

    let max = mid = min = 0
    let highest,middle,lowest

    for(let pair of uniqueWords) {
        const [key,value] = pair
        
        if(value > max) {
            lowest = middle 
            middle = highest
            max = value
            highest = key
        }else if(value > mid) {
            lowest = middle 
            middle = key
            mid = value
        }else if(value > min) {
            min = value
            lowest = key
        }
    }
    
    return [highest,middle,lowest].filter(entry => entry != undefined)
}

console.log(topThreeWords("  //wont won't won't "))

/*

let currentWordNumber = uniqueWords.get(str[i])
            if(currentWordNumber > max) {
                lowest = middle 
                middle = highest
                max = currentWordNumber
                highest = str[i]
            }else if(currentWordNumber > mid) {
                lowest = middle
                mid = currentWordNumber
                middle = str[i]
            }else {
                min = currentWordNumber
                lowest = str[i]
            }
        }

//     let currentWordNumber = uniqueWords.get(str[i])
        //     if(currentWordNumber > max) {
        //         min = mid
        //         mid = max 
        //         max = currentWordNumber
        //         highest = str[i]
        //     }else if(currentWordNumber > mid) {
        //         min = mid 
        //         mid = currentWordNumber
        //         middle = str[i]
        //     }else if(currentWordNumber > min) {
        //         min = currentWordNumber
        //         lowest = str[i]
        //     }
// for(let key of uniqueWords) {
    //     sorted.push(key)
    // }
    // console.log(sorted)
    // sorted.sort((a,b) => a[1] - b[1])

    // for(let i = sorted.length - 1;i >= 0;i--) {
    //     if(result.length === 3) break
    //     result.push(sorted[i][0])
    // }
    // console.log(result)

// let high = mid = low = 0
    // let first,middle,last


//     let currentWordCount = uniqueWords.get(str[i])
        //     if(currentWordCount > high) {
        //         high = currentWordCount 
        //         first = str[i]
        //     }else if(currentWordCount > mid) {
        //         mid = currentWordCount
        //         middle = str[i]
        //     }else if(currentWordCount > low) {
        //         low = currentWordCount 
        //         last = str[i]
        //     }

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