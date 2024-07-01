/*
Given the head of a linked list, 
reverse the nodes of the list k 
at a time, and return the modified list.

k is a positive integer and is less 
than or equal to the length of the 
linked list. If the number of nodes 
is not a multiple of k then left-out 
nodes, in the end, should remain as it is.

You may not alter the values in the 
list's nodes, only nodes themselves 
may be changed.
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node5 = new ListNode(5,null)
const node4 = new ListNode(4,node5)
const node3 = new ListNode(3,node4)
const node2 = new ListNode(2,node3)
const l1 = new ListNode(1,node2)

function reverseKGroup(list,k) {

    const stack = []
    let newNode = new ListNode(null)
    let headNode = newNode

    while(list) {
        stack.push(list.val)
        if(stack.length === k) { 
            while(stack.length) {
                let node = new ListNode(stack.pop())
                newNode.next = node 
                newNode = node
            }
        }
        list = list.next
    }
    while(stack.length) {
        let node = new ListNode(stack.shift())
        newNode.next = node 
        newNode = node
    }
    return headNode.next
}

reverseKGroup(l1,3)

/*
REDO SOLUTION

function reverseKGroup(head,x) {
  const nodes = [];
  let count = 0;
  let pointer = head;

  let newList = new ListNode();
  let newPointer = newList;

  while(pointer) {
    if(count === x) {
      while(nodes.length) {
        let prevNode = nodes.pop();
        newPointer.next = prevNode;
        newPointer = newPointer.next;
      }
      count = 0;
    }
    nodes.push(pointer)
    count++
    pointer = pointer.next
  }
  while(nodes.length) {
    let prevNode = count === x ? nodes.pop() : nodes.shift();
    newPointer.next = prevNode;
    newPointer = newPointer.next;
  }
  if(count === x) newPointer.next = null;
  return newList.next;
}

PERFORMANCE SOLUTION 

function reverseKGroup(list,k) {

    let prevNode = new ListNode()
    let headNode = prevNode
    let stack = []

    while(list) {
        stack.push(list.val)
        if(stack.length === k) {
            while(stack.length) {
                let newNode = new ListNode(stack.pop())
                prevNode.next = newNode 
                prevNode = newNode
            }
        }
        list = list.next
    }
    while(stack.length) {
        let newNode = new ListNode(stack.shift())
        prevNode.next = newNode 
        prevNode = newNode
    }
    return headNode.next
}

let dummy = new ListNode()
    let headNode = dummy
   
    let allNodes = []
    let stack = []
    let n = list
    
    while(n) {
        allNodes.push(n.val)
        n = n.next
    }

    for(let i = 0;i < allNodes.length;i++) {
        
        stack.unshift(allNodes[i])
        if(stack.length === k) {
            while(stack.length) {
                let val = stack.shift()
                let nextNode = new ListNode(val)
                dummy.next = nextNode
                dummy = nextNode
            }
        }
        else if(allNodes.length - i < k) {
            let nextNode = new ListNode(allNodes[i])
            dummy.next = nextNode 
            dummy = nextNode
        }
    }
    return headNode.next


let stack = []
    let prevNode = new ListNode()
    let headNode = prevNode
    let n = head 

    while(n) {
        stack.unshift(n.val)
        if(stack.length === k) {
            while(stack.length) {
                let nextNode = new ListNode(stack.shift())
                prevNode.next = nextNode 
                prevNode = nextNode
            }
        }
        
        
        n = n.next
    }
    return headNode.next

let dummy = new ListNode()
    let headNode = dummy
   
    let allNodes = []
    let arr = []
    let n = list
    
    while(n) {
        allNodes.push(n.val)
        n = n.next
    }

    for(let i = 0;i < allNodes.length;i++) {
        if(allNodes.length - i < k) {
            let nextNode = new ListNode(allNodes[i])
            dummy.next = nextNode 
            dummy = nextNode
        }
        arr.unshift(allNodes[i])
        if((i + 1) % k === 0) {
            while(arr.length) {
                let val = arr.shift()
                let nextNode = new ListNode(val)
                dummy.next = nextNode
                dummy = nextNode
            }
        }
    }
    return headNode.next

let allNodes = []
    let n = list

    while(n) {
        allNodes.push(n.val)
        n = n.next
    }
    
    let test = []
    let arr = []

    for(let i = 0;i < allNodes.length;i++) {
        if(allNodes.length - i < k) return;
        if(i / k === 0) {
            test.push(...arr)
            arr = []
        }
        arr.shift(allNodes[i])
    }

*/