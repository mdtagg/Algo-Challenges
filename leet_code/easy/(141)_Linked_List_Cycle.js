/*
Given head, the head of a linked list, 
determine if the linked list has a cycle
 in it.

There is a cycle in a linked list if 
there is some node in the list that 
can be reached again by continuously
 following the next pointer. Internally,
  pos is used to denote the index of 
  the node that tail's next pointer is
   connected to. Note that pos is not 
   passed as a parameter.

Return true if there is a cycle in the 
linked list. Otherwise, return false.
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node4 = new ListNode(-4)
const node3 = new ListNode(0,node4)
const node2 = new ListNode(2,node3)
const l1 = new ListNode(3,node2)
node4.next = node2

// const l1 = new ListNode(1,null)

const hasCycle = (head) => {
    let fast = head

    while(fast && fast.next) {
        head = head.next
        fast = fast.next.next
        if(head === fast) return true
    }
    return false
}

console.log(hasCycle(l1))

/*

let slow = head
    let fast = head 

    while(fast && fast.next) {
        slow = slow.next 
        fast = fast.next.next 

        if(slow === fast) {
            return true 
        }
    }
    return false
PERFORMANCE SOLUTION

let slow = head
    let fast  = head
    while(fast && fast.next)
    {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false

INITIAL SOLUTION

const map = new Map()
    let n = head

    while(n) {
        if(map.has(n)) {
            return true
        }
        map.set(n,n)
        n = n.next
    }
    return false


*/