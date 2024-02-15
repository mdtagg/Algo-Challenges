
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const yallist = require('yallist')
const l1Test = yallist.create([1,2,4])
console.log(l1Test.head)
const node3 = new ListNode(4)
const node2 = new ListNode(2,node3)
const l1 = new ListNode(1,node2)

const node2_3 = new ListNode(4)
const node2_2 = new ListNode(3,node2_3)
const l2 = new ListNode(1,node2_2)


var mergeTwoLists = function(l1, l2) {
    
    let mover = new ListNode()
    let pointer = mover 

    while(l1 && l2) {
        if(l1.val <= l2.val) {
            mover.next = l1 
            mover = mover.next
            l1 = l1.next
        }
        else {
            mover.next = l2 
            mover = mover.next 
            l2 = l2.next
        }
    }
    if(!l1) mover.next = l2;
    if(!l2) mover.next = l1;

    return pointer.next
};



console.log(mergeTwoLists(l1,l2))

/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by
splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// - In this challenge we are using recursion to merge the two lists
// - We do this by redefining what the next value in the linked list is on each recursion. 
// - The first equality comparison chooses what the head of the linked list will be and then 
//  each recursion resets the value of .next until we hit the tail of the list. 

/*
if(!l1) return l2
    else if(!l2) return l1
    else if(l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1 
    } else {
        l2.next = mergeTwoLists(l1,l2.next) 
        return l2
    }
*/

//REDO 2 FAIL

// let mover = new ListNode()
//     let pointer = mover
//     let flip = false

//     while(l1 || l2) {

//         let newNode = new ListNode()

//         if(!flip) {
//             if(l1) {
//                 newNode.val = l1.val
//                 l1 = l1.next
//                 flip = true
//             }
//         }else if(flip) {
//             if(l2) {
//                 newNode.val = l2.val 
//                 l2 = l2.next 
//                 flip = false
//             }
//         }

//         mover.next = newNode 
//         mover = newNode
//     }
//     return pointer.next

//REDO 1

// if(!l1) return l2 
//     //ERROR: if should be else if
//     // if
//     else if(!l2) return l1 
//     //ERROR: if should be else if 
//     //if
//     else if(l1.val <= l2.val) {
//         //ERROR: param 1 should be l1.next
//         // l1.next = mergeTwoLists(l1,l2)
//         l1.next = mergeTwoLists(l1.next,l2)
//         return l1
//     }else {
//         l2.next = mergeTwoLists(l1,l2.next)
//         return l2
//     }


// if (!l1) return l2;
//     else if (!l2) return l1;
//     else if (l1.val <= l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2
//     }
