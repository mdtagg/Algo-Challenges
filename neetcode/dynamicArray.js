class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
      this.length = 0;
      this.capacity = capacity;
      this.store = new Array(this.capacity).fill(0);
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
      return this.store[i]
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
      this.store[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
      if(this.length === this.capacity) {
        this.resize()
      }
      this.store[this.length] = n;
      this.length++
  }

  /**
   * @returns {number}
   */
  popback() {
      if(this.length > 0) {
        this.length--
      }
      return this.store[this.length]
  }

  /**
   * @returns {void}
   */
  resize() {
      this.capacity *= 2;
      let newStore = new Array(this.capacity).fill(0)
      for(let i = 0;i < this.length;i++) {
          newStore[i] = this.store[i];
      }
      this.store = newStore;
  }

  /**
   * @returns {number}
   */
  getSize() {
      return this.length;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
      return this.capacity;
  }
}

const arr = new DynamicArray(1);
arr.pushback(1)
arr.pushback(2)
arr.get(1)
arr.set(1,3)

arr.set(2,50)
arr.get(2)
arr.popback()
arr.getSize()
arr.getCapacity()