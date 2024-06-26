
class ListNode {
  constructor(val,nextNode=null) {
      this.val = val;
      this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let count = 0
    let pointer = this.head;
    while(pointer) {
      if(count === index) return pointer.val;
      pointer = pointer.nextNode;
      count++
    }
    return -1
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
      if(!this.head) {
          this.head = new ListNode(val)
      }
      else {
        const prevList = this.head;
        this.head = new ListNode(val);
        this.head.nextNode = prevList;
      }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
      const newTail = new ListNode(val)
      if(!this.head) {
        this.head = newTail;
        this.tail = this.head;
      }
      else {
        let pointer = this.head;
        while(pointer) {
            if(!pointer.nextNode) {
                pointer.nextNode = newTail;
                this.tail = pointer.nextNode;
                return
            }
            pointer = pointer.nextNode;
        }
      }
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
      if(!this.head) return false;
      if(!this.head.nextNode) {
          this.head = null;
          this.tail = null;
          return true;
      }
      let count = 0
      let pointer = this.head;
      while(pointer) {
          if(count + 1 === index) {
              let patch = pointer.nextNode.nextNode;
              pointer.nextNode = patch;
              return true
          }
          count++
          pointer = pointer.nextNode;
      }
  }

  /**
   * @return {number[]}
   */
  getValues() {
      let pointer = this.head;
      let values = []
      while(pointer) {
          values.push(pointer.val);
          pointer = pointer.nextNode;
      }
      return values
  }
}

const myList = new LinkedList()
myList.insertTail(1)
myList.insertTail(2)
myList.get(1)