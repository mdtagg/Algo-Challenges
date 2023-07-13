

var MinStack = function() {
    this.stack = []
};

MinStack.prototype.push = function(val) {
    this.stack = [...this.stack,val]
};

MinStack.prototype.pop = function() {
    return this.stack.splice(this.stack.length - 1)
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    let min = Infinity
    this.stack.forEach(item => {
        if(item < min) {
            min = item
        }
    })
    return min
};

const obj = new MinStack()
obj.push(3)
obj.push(5)
obj.pop()
obj.push(7)
obj.getMin()
const test = obj.top()
const testTwo = obj.getMin()
console.log({test,testTwo})
console.log(obj)