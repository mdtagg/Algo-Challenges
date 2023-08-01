function ListNode(val,next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const node5 = new ListNode(5)
const node4 = new ListNode(4,node5)
const node3 = new ListNode(3,node4)
const node2 = new ListNode(2,node3)
const node1 = new ListNode(1,node2)

const reverseList = (head) => {
    z
}

console.log(reverseList(node1))



/*

EXPLANATION 

The key is to store the next node and then modify the 
current node. 

let prev = null;
    let current = head;
    let next = null;
    
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
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