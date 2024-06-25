

/*
You are given two non-empty linked lists representing 
two non-negative integers. The digits are stored in 
reverse order, and each of their nodes contains a single
 digit. Add the two numbers and return the sum as a 
 linked list.

You may assume the two numbers do not contain any 
leading zero, except the number 0 itself.
*/

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

function ListNode(val,next) {
    this.val = val || 0
    this.next = next || null
}

const n3 = new ListNode(3)
const n2 = new ListNode(4,n3)
const l1 = new ListNode(2,n2)

const node3 = new ListNode(4)
const node2 = new ListNode(6,node3)
const l2 = new ListNode(5,node2)


const addTwoNumbers = (l1,l2) => {

    let mover = new ListNode()
    let pointer = mover
    let carry = 0

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
        let digit = sum % 10
        carry = Math.floor(sum / 10)

        let newNode = new ListNode(digit)
        mover.next = newNode
        mover = newNode
        
    }
    return pointer.next
}

console.log(addTwoNumbers(l1,l2))









// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// const node3 = new ListNode(3)
// const node2 = new ListNode(4,node3)
// const l1 = new ListNode(2,node2)

// const n3 = new ListNode(4)
// const n2 = new ListNode(6,n3)
// const l2 = new ListNode(5,n2)

// var addTwoNumbers = function(l1, l2) {
    
//     let dummy = new ListNode()
//     let pointer = dummy 
//     let carry = 0

//     while(l1 || l2 || carry) {
//         let val1 = 0
//         let val2 = 0

//         if(l1) {
//             val1 = l1.val 
//             l1 = l1.next
//         }

//         if(l2) {
//             val2 = l2.val 
//             l2 = l2.next
//         }

//         let sum = val1 + val2 + carry 
//         let digit = sum % 10
//         carry = Math.floor(sum / 10)

//         let newNode = new ListNode(digit)
//         dummy.next = newNode 
//         dummy = newNode
//     }
//     return pointer.next
// }
// addTwoNumbers(l1,l2)







/*

REDO 5 (FAIL)

// const addTwo = (l1,l2) => {

//     let head = new ListNode()
//     // let pointer = head

//     function traverseList(l1,l2,carry=0) {

//         if(!l1 && !l2) return null

//         let val1 = 0
//         let val2 = 0
    
//         if(l1) {
//             val1 = l1.val 
//         }
//         if(l2) {
//             val2 = l2.val 
//         }
    
//         let sum = val1 + val2 + carry
//         let pointer = new ListNode()

//         if(sum > 9) {
//             // result.unshift(sum % 10)
//             pointer.val = sum % 10
//             pointer.next = traverseList(l1.next,l2.next,sum - 9)
//             head.next = pointer

//         }else if(sum > 0) {
//             pointer.val = sum
//             pointer.next = traverseList(l1.next,l2.next)
//             head.next = pointer

//         }
//         return pointer
//     }
//     traverseList(l1,l2)
//     return head
// }

const dummy = new ListNode()
    const pointer = dummy
    let carry = 0

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
        let digit = sum % 10
        carry = Math.floor(sum / 10)

        let newNode = new ListNode(digit)
        dummy.next = newNode 
        dummy = newNode
    }
    return pointer.next

REDOS 4

PERFORMANCE SOLUTION

let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while(l1 || l2 || carry) {
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

REDOS

let prevNode = new ListNode()
    let dummy = prevNode
    let carry = 0

    while(l1 || l2 || carry) {

        let val1 // = 0
        let val2 // = 0

        if(l1) {
            val1 = l1.val 
            l1 = l1.next
        }

        if(l2) {
            val2 = l2.val 
            l2 = l2.next
        }

        let sum = val1 + val2 + carry
        let digit = sum % 10
        carry = Math.floor(sum / 10)

        let nextNode = new ListNode(digit)
        dummyNode.next = nextNode //prevNode.next = nextNode
        dummyNode = nextNode //prevNode = nextNode
    }
    //return dummy.next

*/