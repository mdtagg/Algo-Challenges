class MinHeap {
  constructor() {
      this.heap = [];
  }

  push(val) {
      this.heap.push(val);
      this._bubbleUp();
  }

  pop() {
      if (this.heap.length === 0) return -1;
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this._heapifyDown();
      }
      return min;
  }

  peek() {
      return this.heap.length ? this.heap[0] : -1;
  }

  _bubbleUp() {
      let idx = this.heap.length - 1;
      while (idx > 0) {
          let parentIdx = Math.floor((idx - 1) / 2);
          if (this.heap[parentIdx] <= this.heap[idx]) break;
          [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
          idx = parentIdx;
      }
  }

  _heapifyDown() {
      let idx = 0;
      while (true) {
          let left = 2 * idx + 1,
              right = 2 * idx + 2,
              smallest = idx;

          if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
          if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
          if (smallest === idx) break;

          [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
          idx = smallest;
      }
  }
}

class NumberContainers {
  constructor() {
      this.indexMap = new Map();
      this.numberMap = new Map();
  }

  change(index, number) {
      if (this.indexMap.has(index)) {
          let prevNumber = this.indexMap.get(index);
          if (prevNumber === number) return;
          let prevHeap = this.numberMap.get(prevNumber);
          if (prevHeap) prevHeap.push(Number.MAX_SAFE_INTEGER);
      }

      this.indexMap.set(index, number);
      if (!this.numberMap.has(number)) this.numberMap.set(number, new MinHeap());
      this.numberMap.get(number).push(index);
  }

  find(number) {
      if (!this.numberMap.has(number) || this.numberMap.get(number).heap.length === 0) return -1;

      let heap = this.numberMap.get(number);
      while (heap.heap.length > 0) {
          let idx = heap.peek();
          if (this.indexMap.get(idx) === number) return idx;
          heap.pop();
      }
      return -1;
  }
}

var obj = new NumberContainers()
obj.change(2, 10)
obj.change(1, 10)
obj.change(3,10)
obj.change(1,20)
var param_2 = obj.find(10)