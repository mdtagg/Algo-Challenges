
function Leaf (val) {
  this.val = val
  this.next = null
}

function Root () {
  this.next = null;
}

let newRoot = new Root();
newRoot.next = new Leaf(1)
newRoot = newRoot.next
newRoot.next = new Leaf(2)
newRoot.next.next = new Leaf(3)
newRoot.next.next.next = new Leaf(4)
newRoot.next.next.next.next = new Leaf(5)

const middleNode = (head) => {
  let nodeMap = new Map();
  let idx = 0
  while(head) {
    nodeMap.set(idx,head);
    head = head.next;
    idx++
  }
  let mid = Math.floor(idx / 2)
  return nodeMap.get(mid)
}

middleNode(newRoot)

