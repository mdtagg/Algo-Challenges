
/*
A linked list of length n is given such 
that each node contains an additional 
random pointer, which could point to any
 node in the list, or null.

Construct a deep copy of the list. 
The deep copy should consist of exactly 
n brand new nodes, where each new node 
has its value set to the value of its 
corresponding original node. Both the 
next and random pointer of the new 
nodes should point to new nodes in 
the copied list such that the pointers 
in the original list and copied list 
represent the same list state. None 
of the pointers in the new list 
should point to nodes in the original 
list.

For example, if there are two nodes 
X and Y in the original list, where 
X.random --> Y, then for the 
corresponding two nodes x and y in 
the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the 
input/output as a list of n nodes. 
Each node is represented as a pair 
of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node 
(range from 0 to n-1) that the random 
pointer points to, or null if it does 
not point to any node.
Your code will only be given the head
 of the original linked list.
*/

function ListNode(val,next,random) {
    this.val = val
    this.next = next
    this.random = null
}

const node4 = new ListNode(4,undefined)
const node3 = new ListNode(3,node4)
const node2 = new ListNode(2,node3)
const node1 = new ListNode(1,node2)

node1.random = node4
node1.next.random = node1 
node1.next.next.random = node3 
node1.next.next.next.random = node2



const copyRandomList = (head) => {

  if(!head) return null;

  const clones = new Map()
  let n = head 

  while(n) {
    clones.set(n,new ListNode(n.val))
    n = n.next
  }

  n = head 

  while(n) {
    clones.get(n).next = clones.get(n.next) || null 
    clones.get(n).random = clones.get(n.random) || null 
    n = n.next
  }
  
  return clones.get(head)
}

console.log(copyRandomList(node1))

/*
REDOS 2

PERFORMANCE SOLUTION

if(!head){
    return null;
  }

  const map = new Map();
  function helper(head){
    if(!head){
      return null;
    }

    if(map.has(head)){
      return map.get(head);
    }

    const newNode = new Node(head.val);
    map.set(head, newNode);

    newNode.next = helper(head.next);
    newNode.random = helper(head.random);

    return newNode;
  }
  return helper(head);

INITIAL SOLUTION

if(!head) {
      return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
      clones.set(n, new ListNode(n.val));
      n = n.next
    }
    n = head;
    while(n) {
      clones.get(n).next = clones.get(n.next) || null;
      clones.get(n).random = clones.get(n.random) || null;
      n = n.next
    }
    return clones.get(head);


CODE GRAVEYARD

if(!head) return null 

    let newList = new ListNode(head.val)
    let pointer = newList
    let left = head.next

    let stack = []
    let counter = 0

    while(left) {
        let val = left.val
        let index = left.random
        if(stack.length && stack[0][1] === counter) {
            let newPointer = stack.pop()
            newPointer.random = stack[0][0]
        }
        pointer.next = new ListNode(val)
        stack.push(pointer,index)
        pointer = pointer.next
        left = left.next
        counter++
    }
    console.log(newList)


*/