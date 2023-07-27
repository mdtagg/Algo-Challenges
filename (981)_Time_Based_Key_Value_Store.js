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

const test = new TimeMap()
test.set("foo","sar",6)
test.set("foo","car",3)
test.set("foo","bar",2)
test.set("foo","bar",7)
test.set("foo","bar",9)
test.set("foo","bar",1)



console.log(test.get("foo",6))


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