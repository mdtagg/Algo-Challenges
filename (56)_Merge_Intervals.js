

const merge = (intervals) => {

    intervals = intervals.sort((a,b) => a[0] - b[0])
    let result = []
    let minInterval = intervals[0][0]
    let maxInterval = intervals[0][1]

    for(let i = 1;i < intervals.length;i++) {
        if(intervals[i][0] <= maxInterval) {
            maxInterval = Math.max(maxInterval,intervals[i][1])
        }
        else {
            result.push([minInterval,maxInterval])
            minInterval = intervals[i][0]
            maxInterval = intervals[i][1]
        }
    }
    
    result.push([minInterval,maxInterval])
    return result
}

merge([[1,3],[2,6],[8,10],[10,18]])

/*
const merge = (intervals) => {

    intervals = intervals.sort((a,b) => a[0] - b[0])
    let result = []
    let minInterval = intervals[0][0]
    let maxInterval = intervals[0][1]

    for(let i = 1;i < intervals.length;i++) {
        if(intervals[i][0] <= maxInterval) {
            maxInterval = Math.max(maxInterval,intervals[i][1])
        }
        else {
            result.push([minInterval,maxInterval])
            minInterval = intervals[i][0]
            maxInterval = intervals[i][1]
        }
        if(i === intervals.length - 1) {
            if(result[result.length - 1] >= intervals[i][0]) {
                result.push([minInterval,maxInterval])
            }else {
                result.push(intervals[i])
            }
        }
    }
    return result
}


const merge = (intervals) => {

    intervals = intervals.sort((a,b) => a[0] - b[0])
    let result = []
    let minInterval = intervals[0][0]
    let maxInterval = intervals[0][1]

    for(let i = 0;i < intervals.length;i++) {
        if(intervals[i][0] <= maxInterval) {
            maxInterval = Math.max(maxInterval,intervals[i][1])
        }else {
            result.push([minInterval,maxInterval])
            minInterval = intervals[i][0]
            maxInterval = intervals[i][1]
        }
    }
    return result

}
*/