
function ListNode(val,next) {
  this.val = val;
  this.next = next;
}

const myList = new ListNode(5)
myList.next = new ListNode(3)
myList.next.next = new ListNode(1)
myList.next.next.next = new ListNode(2)
myList.next.next.next.next = new ListNode(5)
myList.next.next.next.next.next = new ListNode(1)
myList.next.next.next.next.next.next = new ListNode(2)


function nodesBetweenCriticalPoints(head) {
  if(!head.next || !head.next.next) return [-1,-1];

  let idx = 2
  let max = -Infinity;
  let min = Infinity;
  let critPoints = [];
  let prevPointer = head;
  let currPointer = head.next;
  let nextPointer = head.next.next;

  while(nextPointer) {

    if(
      (currPointer.val > prevPointer.val && currPointer.val > nextPointer.val) || 
      (currPointer.val < prevPointer.val && currPointer.val < nextPointer.val)
      ) {
        critPoints.push(idx);
        if(critPoints.length >= 2) {
          min = Math.min(critPoints[critPoints.length - 1] - critPoints[critPoints.length - 2],min);
          max = Math.max(critPoints[critPoints.length - 1] - critPoints[0],max)
        }
      }
    idx++
    prevPointer = prevPointer.next;
    currPointer = currPointer.next;
    nextPointer = nextPointer.next;
  }
  if(critPoints.length < 2) return [-1,-1]
  return [min,max];
}

console.log(nodesBetweenCriticalPoints(myList))