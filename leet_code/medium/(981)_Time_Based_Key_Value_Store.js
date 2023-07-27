class TimeMap {
    constructor() {
        this.map = new Map()
    }
    
    set(key,value,timestamp) {
       const keyVals = this.map.has(key) ? this.map.get(key) : []
       keyVals.push([value,timestamp])
       this.map.set(key,keyVals)
    }

    get(key,timestamp) {
        const keyTimestamps = this.map.has(key) ? this.map.get(key) : []
        console.log(keyTimestamps)
        
        let left = 0
        let right = keyTimestamps.length - 1
        let ts = ""

        while(left <= right) {
            const mid = Math.floor((left + right) / 2)
            const [value,stamp] = keyTimestamps[mid]
            if(stamp === timestamp) {
                return value
            }else if(stamp < timestamp) {
                ts = value
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
        return ts 
    }
}

const timeMap = new TimeMap()
timeMap.set("love", "high", 10)
timeMap.set("love","low",11)
// timeMap.set("foo","bar",3)
// timeMap.set("foo","bar",2)
timeMap.set("love","low", 20);
console.log(timeMap.get("love", 5));
// timeMap.set("foo", "bar2", 4)
// timeMap.get("foo", 4)
// timeMap.get("foo", 5)


/*

INITIAL SOLUTION 

class TimeMap {
    constructor() {             
        this.map = new Map();   
    }
    set(key, value, timestamp) {    
        const keyVals = this.map.has(key) ? this.map.get(key) : [];
        keyVals.push([timestamp, value]);
        this.map.set(key, keyVals);
        console.log(this.map)
    }
    get(key, timestamp) {           
        const keyTimestamps = this.map.has(key) ? this.map.get(key) : [];
        let left = 0,
            right = keyTimestamps.length - 1,
            mid, ts = null
        
        while(left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if(keyTimestamps[mid][0] <= timestamp) {
                ts = keyTimestamps[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ts === null ? "" : ts;
    }
}

CODE GRAVEYARD

while(left <= right) {
            const mid = Math.floor((left + right) / 2)
            const [value,stamp] = keyTimestamps[mid]
            if(stamp === timestamp) {
                // console.log(value)
                return value
            }else if(stamp < timestamp) {
                ts = value
                // console.log({ts})
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
        return ts 


var TimeMap = function() {
    this.map = new Map()
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) {
        this.map.set(key,[[value,timestamp]])
    }else {
        const oldEntry = this.map.get(key)
        oldEntry.push([value,timestamp])
        this.map.set(key,oldEntry)
    }
    this.map.set(key,this.map.get(key).sort((a,b) => a[1] - b[1]))
    console.log(this.map)
};

TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return ''
    const items = this.map.get(key)
    console.log(items)
    for(let i = items.length - 1;i >= 0;i--) {
        if(timestamp === items[i][1]) {
            return items[i][0]
        }else {
            
        }
    }
    if(item[timestamp]) return item[timestamp]
};

*/
// test.set("foo","car",1)
// console.log(test.get("foo",1))
// console.log(test)


// var TimeMap = function() {
//     this.map = new Map();
// };

// TimeMap.prototype.set = function(key, value, timestamp) {
//     if (!this.map.has(key)) this.map.set(key, []);
//     this.map.get(key)[timestamp] = value;
// };

// TimeMap.prototype.get = function(key, timestamp) {
//     if (!this.map.has(key)) return '';
//     const item = this.map.get(key);
//     if (item[timestamp]) return item[timestamp];
//     while (timestamp-- > -1) {
//         if (item[timestamp]) return item[timestamp];
//     }
//     return '';
// };