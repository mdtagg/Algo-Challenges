function compress(music) {
    let identical = []
    let consecutive = []
    let interval = []
    let compressedArray = []
    console.log(Math.round((Math.sqrt((music[1] - music[0]))**2)))
    console.log(Math.round(Math.sqrt((music[2] - music[1])**2)))
    while (music.length) {
        let current = music[0]
        let next = music[1]
        if(current === next) {
            while(music[0] === current) {
                identical.push(...music.splice(0,1))
            }
            identical = identical.reduce((prev,curr) => prev + curr)
            compressedArray.push(`${current}*${identical}`)
            identical = []
        }else if(current === next - 1 && next === music[2] - 1) {
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
                // Math.round(Math.sqrt(music[1] - music[0])**2)
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
compress([0, 2, 4, 5, 7, 6, 5])


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

