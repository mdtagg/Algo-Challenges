function ListNode(val,next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// const node5 = new ListNode(5)
const node4 = new ListNode(4)
const node3 = new ListNode(3,node4)
const node2 = new ListNode(2,node3)
const node1 = new ListNode(1,node2)

/*
1. find the middle of the list. Done going through the list with .nexts
with two pointers. One pointer slow goes one level at a time and fast goes
2 levels. Slow will end up at the middle node. 

2. reverse the nodes in the second half of the list 

3. Create a new list alternating between values in the first section of the
list and the second section. 
 */

const reorderList = (head) => {
    let slow = head 
    let fast = head 

    while(fast.next && fast.next.next) {
        slow = slow.next 
        fast = fast.next.next
    }

    let prev = null 
    let curr = slow.next

    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    slow.next = null 

    let h1 = head 
    let h2 = prev

    while(h2) {
        let temp = h1.next 
        h1.next = h2 
        h1 = h2 
        h2 = temp
    }
} 

reorderList(node1)

/*

REDOS: 2

//1. find middle
    let slow = head
    let fast = head 

    while(fast.next && fast.next.next) {
        slow = slow.next 
        fast = fast.next.next
    }

    //2. reverse nodes 

    let prev = null 
    let curr = slow.next

    while(curr) {
        let temp = curr.next 
        curr.next = prev 
        prev = curr 
        curr = temp
    }

    slow.next = null

    //3. create new list

    BIG CONFUSE
    So h1 and head are different at every step of this while loop
    h1.next getting set to h2 changes h1 and changes the POINTER of 
    head.next. 
    

    let h1 = head
    let h2 = prev 

    while(h2) {
        let temp = h1.next 
        h1.next = h2 
        h1 = h2
        h2 = temp
    }


    var reorderList = function (head) {
  let stack = [], node = head
  if (!node) return
  while (node) {
    stack.push(node)
    node = node.next
  }

  let len = stack.length
  node = head
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0)
      node.next = stack.shift()
    else
      node.next = stack.pop()
    node = node.next
  }
  node.next = null
};
*/