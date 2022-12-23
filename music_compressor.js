function compress(music) {
    
    let consecutive = []
    let interval = []
    let compressedArray = []

    while (music.length) {
        let current = music[0]
        if(music[0] === music[1]) {
            let identical = []
            let consecutiveCount = 0
            for(let i = 0;i < music.length;i++) {
                if(music[i] === current) {
                    consecutiveCount++
                }else {
                    break
                }
            }
            identical.push(...music.splice(0,consecutiveCount))
            compressedArray.push(`${current}*${identical.length}`)
        }
        
        else if(current === next - 1 && next === music[2] - 1) {
            while(music[0] === music[1] - 1) {
                consecutive.push(...music.splice(0,1))
            }
            consecutive.push(...music.splice(0,1))
            compressedArray.push(`${consecutive[0]}-${consecutive[consecutive.length - 1]}`)
            consecutive = []
        }

        else if(Math.round(Math.sqrt((music[1] - music[0]))**2) === 
        Math.round(Math.sqrt((music[2] - music[1])**2))) {
            let intervalNum = music[1] - music[0]
            while(music[1] - music[0] === intervalNum) {
                interval.push(...music.splice(0,1))
            }
            interval.push(...music.splice(0,1))
            compressedArray.push(`${interval[0]}-${interval[interval.length - 1]}/${intervalNum}`)
            interval = []
        }
        else {
            compressedArray.push(music.splice(0,1))
        }
    }
    compressedArray = compressedArray.join(',')
    console.log(compressedArray)

}
compress([1,1,1,5,5,5])


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

