function compress(music) {
    console.log(music)
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

        else if(intervalTest === 1 && intervalTestTwo === 1 && 
            music[1] - music[0] === music[2] - music[1]) {
            
            let consecutive = []
            
            while(Math.round(Math.sqrt((music[1] - music[0])**2)) === 1) {
                consecutive.push(...music.splice(0,1))
            }
            consecutive.push(...music.splice(0,1))
            compressedArray.push(`${consecutive[0]}-${consecutive[consecutive.length - 1]}`)
            
        }

        else if(intervalTest === intervalTestTwo &&
            music[1] - music[0] === music[2] - music[1]) {
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
compress([
    -42, -41, -40, -31, 54, -17, -15, -13, -11, -40,
     84,  86,  24,  75, 76,  75,  74,  73,  72,  -6,
     -7,  -8,  -9, -10, 84,  85,  86, -19,  11,  12,
     13,  14,  55,  92,  5,   3,   1,  -1,  -3,  -6,
     -5,  33,  33,  33, 10,  87
  ])


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

