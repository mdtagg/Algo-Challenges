

function ListNode(val,next) {
  this.val = val;
  this.next = next;
}

const myList = new ListNode(1);
myList.next = new ListNode(4)
myList.next.next = new ListNode(3)
myList.next.next.next = new ListNode(2)
myList.next.next.next.next = new ListNode(5)
myList.next.next.next.next.next = new ListNode(2)


function partition(head,x) {

  let lessThanVals = [];
  let greaterThanVals = []
  let pointer = head;


  while(pointer) {
    if(pointer.val < x) lessThanVals.push(pointer.val);
    else greaterThanVals.push(pointer.val);
    pointer = pointer.next;
  }

  const newList = new ListNode()
  let newPointer = newList

  while(lessThanVals.length) {
    newPointer.next = new ListNode(lessThanVals.shift());
    newPointer = newPointer.next;
  }

  while(greaterThanVals.length) {
    newPointer.next = new ListNode(greaterThanVals.shift());
    newPointer = newPointer.next;
  }
  
  return newList.next;
}

partition(myList,3)