
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];

    // Initialize the heap with the first k elements from the input
    for (let num of nums) {
        this.add(num);
    }
};

KthLargest.prototype.add = function(val) {
    this.heap.push(val);

    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        } else {
            break;
        }
    }

    if (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;

        while (true) {
            let smallestIndex = currentIndex;
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }
    }

    // Return the kth largest element (the smallest element in the heap)
    return this.heap[0];
};

const obj = new KthLargest(3,[4,5,8,2])
console.log(obj.add(3))

/*

PERFORMANCE SOLUTION

var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];

    // Initialize the heap with the first k elements from the input
    for (let num of nums) {
        this.add(num);
    }
};

KthLargest.prototype.add = function(val) {
    // Add the new element to the heap
    this.heap.push(val);

    // Maintain the heap property by performing up-heap (bubble-up) operation
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex] < this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        } else {
            break;
        }
    }

    // If the heap size exceeds k, remove the smallest element
    if (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;

        // Maintain the heap property by performing down-heap (bubble-down) operation
        while (true) {
            let smallestIndex = currentIndex;
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }
    }

    // Return the kth largest element (the smallest element in the heap)
    return this.heap[0];

INITIAL SOLUTION

function kthLargest(k,nums) {
    this.nums = nums 
    this.k = k
}

kthLargest.prototype.add = function add(val) {
    this.nums.push(val)
    this.nums.sort((a,b) => a - b)
    return this.nums[this.nums.length - this.k]
}

CODE GRAVEYARD

function kthLargest(k,nums) {
    this.k = k
    this.nums = constructHeap(nums.sort((a,b) => a - b))
}

kthLargest.prototype.add = function(val) {

}

function constructHeap(nums) {
    const nodeVal = nums.shift()
    const root = new TreeNode(nodeVal)
    let pointer = root
    // let leftPointer,rightPointer

    while(nums.length) {
        const nodeVal = nums.shift()
        const newNode = new TreeNode(nodeVal)
        if(!pointer.left) {
            pointer.left = newNode
            // leftPointer = newNode
        }
        else {
            pointer.right = newNode
            // rightPointer = newNode
        }
        if(pointer.left && pointer.right && (!pointer.left.left || !pointer.left.right)) {
            pointer = pointer.left
        }
        // if(leftPointer.left && leftPointer.right) {
        //     pointer = rightPointer
        // }else {
        //     pointer = leftPointer
        // }
    }
    
}

function TreeNode(val) {
    this.val = val 
    this.left = this.right = null
}

function constructHeap(nums) {
    const newNode = new Node(nums.shift())
    traverse(nums)
    function traverse(nodes,prevNode=newNode.val) {
        if(!nodes.length) return
        let newVal = nodes.shift()
        if(prevNode.val < newVal) {
            prevNode.right = new Node(newVal)

        }else {
            prevNode.left = new Node(newVal)
        }

    }
}

function node(val) {
    this.val = val 
    this.left = this.right = null
}
 */