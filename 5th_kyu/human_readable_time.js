function humanReadable (seconds) {
    let time = [0,0,0]
    while(seconds > 0) {
        if(seconds / 3600 >= 1) {
            time[0] = Math.floor(seconds/3600)
            seconds -= time[0] * 3600
        }else if(seconds / 60 >= 1) {
            time[1] = Math.floor(seconds/60)
            seconds -= time[1] * 60
        }else {
            time[2] = seconds
            break
        }
    }
    let newTime = time.map((number) => {
        return number < 10 ? '0' + number.toString() : number
    })
    console.log(newTime.join(':'))
}


humanReadable(90)

// function humanReadable (seconds) {
//     let hours = 0
//     let minutes = 0
//     let time = []
//     while(seconds / 3600 >= 1) {
//         seconds -= 3600
//         hours++
//     }
//     time.push(hours)
//     while(seconds / 60 >= 1) {
//         seconds -=60
//         minutes++
//     }
//     time.push(minutes)
//     time.push(seconds)
//     for(let i = 0;i < time.length;i++) {
//         let newNumber = '0' + time[i].toString()
//         if(time[i].toString().length === 1) {
//             time.splice(i,1,newNumber)
//         }
//     }
//     return time.join(':')
// }