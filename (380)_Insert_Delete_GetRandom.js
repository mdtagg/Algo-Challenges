

var RandomizedSet = function() {
    this.count = 0
    this.test = []
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.map.has(val)) {
        this.test.push(val)
        this.map.set(val,this.count)
        this.count++
        return true
    }
    return false

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
   if(this.map.has(val)) {
        let idx = this.map.get(val)
        this.map.delete(val)
        this.test.splice(idx,1)
        this.count--
        return true
   }
   return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const rand = Math.floor(Math.random() * this.count)
    return test[rand]
};

const set = new RandomizedSet()
set.insert(5)
set.insert(7)
set.insert(9)
set.remove(7)
// set.getRandom()
/*

var RandomizedSet = function() {
    this.numMap = new Map()
    this.countMap = new Map()
    this.count = 0
    this.adjust = 0
};

RandomizedSet.prototype.insert = function(val) {
    if(!this.numMap.get(val)) {
        return true
    }
    this.numMap.set(val,this.count)
    this.countMap.set(this.count,val)
    this.count++
    return false
};

RandomizedSet.prototype.remove = function(val) {
   
    if(this.numMap.has(val)) {
        let idx = this.numMap.get(val)
        this.numMap.delete(val)
        this.countMap.delete(idx)
        this.adjust++
        return true
    }
    return false
};

RandomizedSet.prototype.getRandom = function() {
    let randomNum = Math.floor(Math.random() * this.count)
    return this.countMap.get(randomNum - this.adjust)
};

1,2,3 count = 3
2,3 count = 2




var RandomizedSet = function() {
    this.numSet = new Set()
    this.max = 0
};

RandomizedSet.prototype.insert = function(val) {
    const hasNum = this.numSet.has(val)
    if(!hasNum) {
        this.numSet.add(val)
        this.max++
    }
    return hasNum
};

RandomizedSet.prototype.remove = function(val) {
    const hasNum = this.numSet.has(val)
    if(!hasNum) {
        return false
    }
    this.numSet.delete(val)
    this.max--
};

RandomizedSet.prototype.getRandom = function() {
    let randomNum = Math.floor(Math.random() * this.max)
    return this.numSet.get(randomNum)
};
*/