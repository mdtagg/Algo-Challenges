/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node3 = new ListNode(3)
const node2 = new ListNode(4,node3)
const l1 = new ListNode(2,node2)

const n3 = new ListNode(4)
const n2 = new ListNode(6,n3)
const l2 = new ListNode(5,n2)

var addTwoNumbers = function(l1, l2) {

}
addTwoNumbers(l1,l2)

/*
PERFORMANCE SOLUTION

let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while(l1 || l2) {
        let val1 = 0;
        let val2 = 0;
        if(l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
        if(l2) {
            val2 = l2.val;
            l2=l2.next;
        }
        let val = val1 + val2 + carry;
        curr.next = new ListNode(val%10);
        if(val >= 10) {
            carry =1;
        } else {
            carry =0;
        }
        curr = curr.next;
    }
    // if(carry === 1) {
    //     curr.next = new ListNode(1);
    // }
    return dummy.next;

INITIAL SOLUTION

let carry = 0
    let previousNode = new ListNode()
    const headNode = previousNode
    while(l1 || l2 || carry) {
        let val1 = 0
        let val2 = 0
        if(l1) {
            val1 = l1.val
            l1 = l1.next
        }
        if(l2) {
            val2 = l2.val
            l2 = l2.next
        }
        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        let digit = sum % 10
        const currentNode = new ListNode(digit)
        previousNode.next = currentNode
        previousNode = currentNode
    }
    return headNode.next

The key here was to first extract the values from the linked list. val1 and 2 are set to the current
val in the linked list and then the linked list is written over to be the object that the linked
list is pointing to. 

Then the trick was establish a variable that tracks the amount that needs to be carried over when
the numbers are added together. 

The next trick was to divide each sum of numbers in the list into the tens place and the ones 
place. The tens place is carry and the ones place is digit. Digit was interesting because any
number under 10 modulus 10 is going to be that number, but over ten will be the remainder
which is our digit. 

Finally we set previousNode to be an empty listNode and our currentNode to be a new ListNode 
with digit as the value. Then we set previousNode.next to point to the current node and previous
node is set to current node. Basically previous node is acting as a dummy node, being loaded with
pointers to current nodes we generate and then head node is pointing to the most current 
previous node. 
*/