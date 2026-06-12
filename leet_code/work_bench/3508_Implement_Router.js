import {  Queue } from "@datastructures-js/queue"

class Router {
  constructor(memoryLimit) {
    this.size = 0;
    this.cap = memoryLimit;
    this.now = -1;
    this.buffer; // To check for dupes
    this.list = new Queue(); // Main FIFO queue
    this.dests = new Map(); // Map of dest. times
  }
  addPacket(source, destination, timestamp) {
    if (timestamp > this.now) {
      this.now = timestamp; // Reset buffer
      this.buffer = new Set(); //   on new timestamp
    }
    let code = source * 1e6 + destination;
    if (this.buffer.has(code)) return false; // Dupe found exit
    this.buffer.add(code);
    if (this.size++ === this.cap) this.forwardPacket(); // Cap reached, make space
    this.list.push([source, destination, timestamp]); // Add to main queue
    if (!this.dests.has(destination))
      // Use 0-idx to store left
      this.dests.set(destination, [1]); //   limit for binary search
    this.dests.get(destination).push(timestamp); // Update destination array
    return true;
  }
  forwardPacket() {
    let entry = this.list.pop(); // Get next queued entry
    if (entry) {
      this.size--;
      this.dests.get(entry[1])[0]++; // Update array left limit
      if (entry[2] === this.now) this.buffer.delete(entry[0] * 1e6 + entry[1]); // Update buffer if necessary
    }
    return entry || [];
  }
  getCount(destination, startTime, endTime) {
    let res = this.dests.get(destination);
    if (!res) return 0;
    let left = this.findLeft(res, startTime, res[0]), // Binary search left & right
      right = this.findLeft(res, endTime + 1, res[0]); //   getting limit from 0-idx
    return right - left;
  }
  findLeft(arr, val, lo = 0, hi = arr.length - 1) {
    // Binary search helper
    while (lo <= hi) {
      let mid = (lo + hi) >> 1;
      arr[mid] < val ? (lo = mid + 1) : (hi = mid - 1);
    }
    return lo;
  }
}

const testCases = [
  [
    3,
    [1, 4, 90],
    [2, 5, 90],
    [1, 4, 90],
    [3, 5, 95],
    [4, 5, 105],
    [],
    [5, 2, 110],
    [5, 100, 110],
  ],
];

const myRouter = new Router(testCases[0][0]);
myRouter.addPacket(...testCases[0][1]);
myRouter.addPacket(...testCases[0][2]);
myRouter.addPacket(...testCases[0][3]);
myRouter.addPacket(...testCases[0][4]);
myRouter.addPacket(...testCases[0][5]);
myRouter.forwardPacket();
myRouter.addPacket(...testCases[0][7]);
myRouter.getCount(...testCases[0][8]);

/*


class Router {

  constructor(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.storedMemory = [];
  }

  addPacket(source, destination, timestamp) {
    const stringifiedPacket = JSON.stringify([source, destination, timestamp]);
    if(this.storedMemory.includes(stringifiedPacket)) return false;
    if(this.storedMemory.length === this.memoryLimit) {
      this.storedMemory.pop()
      this.storedMemory.unshift(stringifiedPacket)
    }
    else {
      this.storedMemory.unshift(stringifiedPacket)
    }
    return true;
  }

  forwardPacket() {
    let currentPacket = this.storedMemory.pop()
    return currentPacket ? JSON.parse(currentPacket) : []
  }

  getCount(destination,startTime,endTime) {
    let count = 0;
    for(let packet of this.storedMemory) {
      let [source,dest,time] = JSON.parse(packet);
      if(dest !== destination || (time < startTime || time > endTime)) continue;
      count++;
    }
    return count;
  }
}
*/
