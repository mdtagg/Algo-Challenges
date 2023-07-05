

var mergeTwoLists = function(list1, list2) {
    
};

// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
// }

// class ListNode {
//     constructor(data) {
//         this.data = data 
//         this.next = null
//     }
// }

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)

    return val
}

const node3 = ListNode(4)
const node2 = ListNode(2,node3)
const node1 = ListNode(1,node2)
const l1 = new ListNode([node1,node2,node3],node2)

console.log(l1.next)
// let node1 = new ListNode(1)
// let node2 = new ListNode(2)
// let node3 = new ListNode(4)

// node1.next = node2
// node2.next = node3

// let list1 = new LinkedList(node1)
// console.log(list1)