function compress(music) {
    
    let compressedArray = []

    while (music.length) {

        let intervalTest = Math.round(Math.sqrt((music[1] - music[0])**2))
        let intervalTestTwo = Math.round(Math.sqrt((music[2] - music[1])**2))

        if(intervalTest === 0) {
            let current = music[0]
            let identicalCount = 0
            for(let i = 0;i < music.length;i++) {
                if(music[i] === music[0]) {
                    identicalCount++
                }else {
                    break
                }
            }
            music.splice(0,identicalCount)
            compressedArray.push(`${current}*${identicalCount}`)
        }

        else if(intervalTest === 1 && intervalTestTwo === 1) {
            let consecutive = []
         
            while(Math.round(Math.sqrt((music[1] - music[0])**2)) === 1) {
                consecutive.push(...music.splice(0,1))
            }
            consecutive.push(...music.splice(0,1))
            compressedArray.push(`${consecutive[0]}-${consecutive[consecutive.length - 1]}`)
        }

        else if(intervalTest === intervalTestTwo) {
            let interval = []
            while(Math.round(Math.sqrt((music[1] - music[0])**2)) === intervalTest) {
                interval.push(...music.splice(0,1))
            }
            interval.push(...music.splice(0,1))
            compressedArray.push(`${interval[0]}-${interval[interval.length - 1]}/${intervalTest}`)
        }
        else {
            compressedArray.push(music.splice(0,1))
        }
    }
    compressedArray = compressedArray.join(',')
    console.log(compressedArray)

}
compress([1,10,8,6,7])


// let single = []
//     let current = music[0]
//     while(music.length) {

//         while(current === music[0]) {
//             identical.push(...music.splice(0,1))
//         }
//         single.push(music.splice(0,1))
//     }
//     console.log(identical)
//     console.log(single)

// let identical = []
//     let consecutive = []
//     let intervals = []
//     let newArray = []

//     for(let i = 0;i < music.length;i++) {
//         let current = music[i]
//         let next = music[i + 1]
//         if(current === next) {
            
//         }
//     }
//     console.log(identical)

