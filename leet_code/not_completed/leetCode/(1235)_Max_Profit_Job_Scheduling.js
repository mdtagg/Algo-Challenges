

const jobScheduling = (startTime, endTime, profit) => {

    let start = 0
    let end = 0
    let endVal = endTime[0]
    let result = 0
    let stack = []

    while(start < startTime.length) {
        if(startTime[start] >= endVal) {
            let prevTime = stack.pop()
            if(prevTime < stack[0]) {
                stack.push(prevTime)
            }
            
        }
        else {
            stack.push(profit[end])
            start++
            end++
        }
    }
}

jobScheduling([1,2,3,4,6],[3,5,10,6,9],[20,20,100,70,60])

/*
[1,2,3,3],[3,4,5,6],[50,10,40,70]

const jobScheduling = (startTime, endTime, profit) => {

    let result = 0
    let currIdx = 0
    let start = 0

    for(let i = 0;i < endTime.length;i++) {

        let j  = currIdx
        let max = 0
        
        while(startTime[j] < endTime[i]) {
            max = Math.max(profit[i],max)
            j++
            i++
        }
        if(endTime[i + 1]) {
            let startIdx = i
            let endIdx = i
            let subMax = 0
            while(endTime[startIdx] > endTime[endIdx + 1]) {
                subMax += profit[endIdx + 1]
                endIdx++
            }
            max = Math.max(max,subMax)
        }
        result += max;
        max = 0;
    }
}

// let j = currIdx
        // let max = 0 
        
        // while(startTime[j] < endTime[i]) {
        //     max = Math.max(profit[j],max)
        //     j++
        // }
        // currIdx = j
*/