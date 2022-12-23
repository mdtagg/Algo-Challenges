function humanReadable (seconds) {
    let hours = 0
    let minutes = 0
    let time = []
    while(seconds / 3600 >= 1) {
        seconds -= 3600
        hours++
    }
    time.push(hours)
    while(seconds / 60 >= 1) {
        seconds -=60
        minutes++
    }
    time.push(minutes)
    time.push(seconds)
    console.log(time)
    for(let i = 0;i < time.length;i++) {
        let newNumber = '0' + time[i].toString()
        if(time[i].toString().length === 1) {
            time.splice(i,1,newNumber)
        }
    }
    console.log(time.join(':'))
}

humanReadable(60)