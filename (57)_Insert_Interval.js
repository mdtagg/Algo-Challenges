

var insert = function (intervals, newInterval) {

    //destructure both values from newInterval
    let [ start, end ] = newInterval
    //initialize two arrays left and right 
    let left = []
    let right = []

    //iterate through intervals
    for(let interval of intervals) {

        //destructure the two values of the current interval
        let [ first, last ] = interval 

        //if the low val of newInterval is greater than the high val of the current interval
        //push the current interval into the left array
        if(start > last) left.push(interval);
        //else if the high val of new interval is less than the low val of the current interval
        //push the current interval into the right array
        else if(end < first) right.push(interval)
        //else set the start to the min between start and the low val of current interval
        //set the end to the max val between end and the high value of current interval
        else {
            start = Math.min(first,start)
            end = Math.max(last,end)
        }
    }
    //return an array wth left destructured, and array of start and end , and right destructured
    return [...left,[start,end],...right]
};

let testCases = [
    [[[1,5]],[0,3]],
    [[[1,5],[6,8]],[0,9]],
    [[[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]],
    [[[1,5]],[2,7]],
    [[[1,5]],[2,3]],
    
]

insert(...testCases[2])

/*
let [start, end] = newInterval;
    let left = [];
    let right = [];
    
    for (const interval of intervals) {
      const [first, last] = interval;
      
      // current interval is smaller than newInterval
      if (last < start) left.push(interval);
      
      // current interval is larger than newInterval
      else if (first > end) right.push(interval);
      
      // there is a overlap
      else {
        start = Math.min(start, first);
        end = Math.max(end, last);
      }
    }
    
    return [...left, [start, end], ...right]; 

const insert = (intervals,newInterval) => {

    const [ newLow,newHigh ] = newInterval
    if(!intervals.length || (newLow < intervals[0][0] && newHigh > intervals[intervals.length - 1][1])) return [newInterval];

    for(let i = 0;i < intervals.length;i++) {

        const [ currLow, currHigh ] = intervals[i]
        if(newLow < currLow && newHigh >= currHigh) intervals[i][0] = newLow;

        if(newLow >= currLow && newLow <= currHigh) {
            // if(newHigh > currHigh) intervals[i][1] = newHigh
            let highVal = Math.max(newHigh,currHigh)

            while(intervals.length !== 1 && newHigh >= intervals[i + 1][0]) {
                highVal = intervals[i + 1][1]
                intervals.splice(i + 1,1);
            }
            intervals[i][1] = highVal
            return intervals
        }
    }
    if(newLow > intervals[intervals.length - 1][1]) intervals.push(newInterval)
    return intervals
}

const insert = (intervals,newInterval) => {
    const [ newLow,newHigh ] = newInterval
    if(!intervals.length) {
        intervals.unshift(newInterval)
        return intervals
    }
    if(intervals.length === 1) {
        let [currLow,currHigh] = intervals[0]
        if(currHigh < newLow) intervals.push(newInterval);
        else if(currLow > newHigh) intervals.unshift(newInterval);
        else {
            if(newLow < currLow) intervals[0][0] = newLow;
            if(newHigh > currHigh) intervals[0][1] = newHigh;
        }
        return intervals
    }
    // iterate through our intervals array
    for(let i = 0;i < intervals.length;i++) {
        const [ currLow, currHigh ] = intervals[i]
        
        if(newLow >= currLow && newLow <= currHigh) {
            //initialize high val varible and assign to new high interval
            let highVal = newHigh
            // initialize while loop to run while new interval high is < curr interval high
            while(intervals.length !== 1 && newHigh >= intervals[i + 1][0]) {
                //reassign high val to the next high interval val
                highVal = intervals[i + 1][1]
                //splice off next entry of array from current index
                intervals.splice(i + 1,1);
            }
            //reassign the high val at current index to last highest value we spliced off
            intervals[i][1] = highVal
            return intervals
        }
    }
    intervals.push(newInterval)
    return intervals
}
*/