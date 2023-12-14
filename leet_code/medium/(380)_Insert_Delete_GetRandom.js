

var RandomizedSet = function() {
    this.stack = []
    this.map = new Map()
};

RandomizedSet.prototype.insert = function(val) {
    if(!this.map.has(val)) {
        this.map.set(val,this.stack.length)
        this.stack.push(val)
        return true
    }
    return false
};

RandomizedSet.prototype.remove = function(val) {
   if(this.map.has(val)) {
        let newIdx = this.map.get(val)
        this.swap(newIdx,this.stack.length - 1)
        this.map.set(this.stack[newIdx],newIdx)
        this.map.delete(val)
        return true
   }
   return false
};

RandomizedSet.prototype.getRandom = function() {
    return this.stack[Math.floor(Math.random() * this.stack.length)]
};

RandomizedSet.prototype.swap = function(newIdx,len) {
    let temp = this.stack[newIdx]
    this.stack[newIdx] = this.stack[len]
    this.stack[len] = temp
    this.stack.pop()
}

const set = new RandomizedSet()
set.insert(5)
set.insert(7)
set.insert(9)
set.remove(7)
set.getRandom()
/*

var RandomizedSet = function() {
    this.stack = []
    this.map = new Map()
};

RandomizedSet.prototype.insert = function(val) {
    if(!this.map.has(val) || !this.map.get(val)) {
        this.map.set(val,this.stack.length)
        this.stack.push(val)
        return true
    }
    return false

};

RandomizedSet.prototype.remove = function(val) {
   if(this.map.has(val)) {
        let newIdx = this.map.get(val)
        this.stack.splice(newIdx,1)
        this.map.delete(val)
        return true
   }
   return false
};

RandomizedSet.prototype.getRandom = function() {
    let randNum = Math.floor(Math.random() * this.idx)
    return this.stack[randNum] !== undefined ? this.stack[randNum] : this.getRandom()
};

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