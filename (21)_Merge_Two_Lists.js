

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node3 = new ListNode(4)
const node2 = new ListNode(2,node3)
const l1 = new ListNode(1,node2)
// const l1 = new ListNode([node1,node2,node3],node2)

// console.log(l1)

const node2_3 = new ListNode(4)
const node2_2 = new ListNode(3,node2_3)
const l2 = new ListNode(1,node2_2)

console.log(mergeTwoLists(l1,l2))

// console.log()


// let node1 = new ListNode(1)
// let node2 = new ListNode(2)
// let node3 = new ListNode(4)

// node1.next = node2
// node2.next = node3

// let list1 = new LinkedList(node1)
// console.log(list1)

// {
//     val: { value: 1 },
//     next: {
//       value: [2,4],
//     }
//   }
//   {
//     val: { value: 2 },
//     next: { value: [4] }
//   }
//   {
//     val: { value: 4 },
//     next: { value: null }
//   }
  