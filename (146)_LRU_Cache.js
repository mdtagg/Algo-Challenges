class LRUCache {
    constructor(capacity) {
        
    }

    get(key) {
        
    }

    put(key, value) {
        
    }
}

const test = new LRUCache(2)
test.put(1,1)
test.put(2,2)
test.get(1)
test.put(3,3)

/*
INITIAL SOLUTION 

class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
          const firstItem = this.map.keys().next().value;
          this.map.delete(firstItem);
        }
    }
}

function ListNode(val) {
    this.val = val
    // this.next = next
}

function LRUCache(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.stack = []
}

LRUCache.prototype.get = function(key) {
    let node = this.stack.shift()
    this.stack.push(node)
    let newNode = this.map.get(key)
    console.log(newNode)
}

LRUCache.prototype.put = function(key,value) {
    let node = new ListNode({key,value})
    this.map.set(node,node)
    this.stack.push(node)
    if(this.map.size > this.capacity) {
        let nodeToDelete = this.stack.shift()
        this.map.delete(this.map.get(nodeToDelete))
    }
}
*/