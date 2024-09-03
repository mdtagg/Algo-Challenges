import { MinPriorityQueue } from "../../node_modules/@datastructures-js/priority-queue";

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.minHeap = new MinPriorityQueue();
    this.k = k;

    for (const num of nums) {
      this.minHeap.enqueue(num);
    }

    while (this.minHeap.size() > k) {
      this.minHeap.dequeue();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.minHeap.enqueue(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.dequeue();
    }
    return this.minHeap.front();
  }
}

// class KthLargest {
//   constructor(k,nums) {
//     this.k = k;
//     this.nums = nums;
//     this.nums = this.nums.sort((a,b) => a - b);
//   }

//   add(val) {
//     if(val != null) {
//       this.nums.push(val)
//       this.nums = this.nums.sort((a,b) => a - b)
//     }
//     if(this.k > this.nums.length) return this.nums[this.nums.length - 1];
//     return this.nums[this.nums.length - this.k]
//   }
// }

const test = new KthLargest(3, [1, 2, 3, 3]);
console.log(test.add(3));
console.log(test.add(5));
console.log(test.add(6));
console.log(test.add(7));
