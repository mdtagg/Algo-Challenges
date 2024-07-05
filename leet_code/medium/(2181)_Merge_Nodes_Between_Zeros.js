const Yallist = require('yallist')

const list = new Yallist([0,3,1,0,4,5,2,0])

function ListNode(val,next) {
  this.val = val;
  this.next = next;
}

function mergeNodes(node) {
  let newList = new ListNode()
  let newListPointer = newList
  let nextPointer = node.next;
  let sum = 0;

  while(nextPointer) {
    sum += nextPointer.value;
    if(nextPointer.value === 0) {
      newListPointer.next = new ListNode(sum);
      newListPointer = newListPointer.next;
      sum = 0;
    }
    nextPointer = nextPointer.next;
  }
  return newList.next
}

mergeNodes(list.head)