/*
You are given the head of a singly linked-list. 
The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
*/

function ListNode(val,next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// const node5 = new ListNode(5)
const node4 = new ListNode(4)
const node3 = new ListNode(3,node4)
const node2 = new ListNode(2,node3)
const node1 = new ListNode(1,node2)

const reverseList = (head) => {
    
}

console.log(reverseList(node1))



/*

REDOS: 2

EXPLANATION 

The key is to store the next node and then modify the 
current node. 

PERFORMANCE SOLUTION 

if(!head) {
        return null;
    }

    let newHead;
    function reverse({ prev, node }) {
        if(!node) {
            newHead = prev;
            return;
        }

        const next = node.next;
        node.next = prev;
        
        reverse({ prev: node, node: next })
    }

    reverse({ prev: head, node: head.next });
    head.next = null;

    return newHead;


let prev = null;
    let current = head;
    let next = null;
    
    while (current) {
        //all of the mutations are happening to current and then prev
        //is set to current at the end

        //stores next value for later use so that we can mutate curr
        next = curr.next
        //breaks link, changes current pointer 
        curr.next = prev
        //sets new link, prev is 
        prev = curr
        //moves the whole process up one level
        curr = next
    }
    
    return prev;

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node3 = new ListNode(4)
const node2 = new ListNode(2,node3)
const l1 = new ListNode(1,node2)

const node2_3 = new ListNode(4)
const node2_2 = new ListNode(3,node2_3)
const l2 = new ListNode(1,node2_2)

*/