

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

const node2_3 = new ListNode(4)
const node2_2 = new ListNode(3,node2_3)
const l2 = new ListNode(1,node2_2)

console.log(mergeTwoLists(l1,l2))

// - In this challenge we are using recursion to merge the two lists
// - We do this by redefining what the next value in the linked list is on each recursion. 
// - The first equality comparison chooses what the head of the linked list will be and then 
//  each recursion resets the value of .next until we hit the tail of the list. 

