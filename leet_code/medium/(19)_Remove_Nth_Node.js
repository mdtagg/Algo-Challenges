
function ListNode(val,next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const node5 = new ListNode(5)
const node4 = new ListNode(4,node5)
const node3 = new ListNode(3,node4) 
const node2 = new ListNode(2,node3) 
const node1 = new ListNode(1,node2)

const removeNthFromEnd = (head,n) => {

    let dummyNode = new ListNode(0,head)
    let left = dummyNode 
    let right = head 

    while(n > 0 && right) {
        right = right.next
        n -= 1
    }

    while(right) {
        right = right.next 
        left = left.next
    }

    left.next = left.next.next 

    return dummyNode.next
}

removeNthFromEnd(node1,2)

/*
MY REDO 

function removeNthFromEnd(head,n) {
  let pointer = head;
  const map = new Map();
  let len = 0

  while(pointer) {
    map.set(++len,pointer);
    pointer = pointer.next;
  }

  let startNode = map.get(len - n);
  let endNode = map.get(len - n + 2);

  if(!startNode) head = head.next;
  else if(n === 1) startNode.next = null;
  else startNode.next = endNode;

  return head;

}

PERFORMANCE SOLUTION

var removeNthFromEnd = function(head, n) {

    //create dummyNode for space to find left and right nodes
    let dummyNode = new ListNode(0, head);
    let left = dummyNode;
    let right = head;

    //move right to starting position
    while (n > 0 && right) {
        right = right.next;
        n -= 1;
    }

    //move left to left position 
    while (right) {
        right = right.next;
        left = left.next;
    }

    //because left is pointing to dummyNode which has the head pointer
    //as its second value, we are able to traverse into the head node 
    // when left.next is set its set to a pointer within the head node
    //so head is changed and dummyNode is changed
    left.next = left.next.next;

    return dummyNode.next;
};

INITIAL SOLUTION

let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head


CODE GRAVEYARD
function recurse(head,n,counter) {
        
        if(!head.next) {
            return true
        }

        else if(n === 0) {
            return
        }
    
        let test = recurse(head.next,n - 1,counter++)
        
        if(test) {
            return true
        }
    }

    let temp 
    let h1 = head

    while(h1.next) {
        let test = recurse(h1,n,counter = 0)
        if(test) {
            temp = h1
        }else {
            head.next = h1
            h1 = h1.next
        }
    }
*/