
const yallist = require('yallist')
const myList = yallist.create([1,2,3,4,5]).head

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const rotateRight = (head,k) => {

    if(!head || !head.next) return head 

    let result = new ListNode()
    let resultPointer = result
    let pointer = head
    let len = 0
     
    while(pointer) {
        len++
        if(pointer.next === null) {
            pointer.next = head 
            break
        }
        pointer = pointer.next
    }

    pointer = head

    let rotations = len - k 
    if(k > len) rotations = len - (k % len)

    while(rotations) {
        pointer = pointer.next
        rotations--
    }

    while(len > 0) {
        result.next = new ListNode(pointer.value)
        result = result.next
        pointer = pointer.next
        len--
    }

    return resultPointer.next
    
}

rotateRight(myList,2)

/*
if(!head || !head.next) return head 

    let reverseNodes = new ListNode()
    let pointer = head
    let len = 0

    while(pointer) {
        let nextNode = new ListNode(pointer.value)
        nextNode.next = reverseNodes.next
        reverseNodes.next = nextNode
        len++
        pointer = pointer.next
    }

    let newResult = new ListNode()
    let newResultPointer = newResult
    reverseNodes = reverseNodes.next
    let start = head
    let rotations = k
    if(k > len) rotations = k % len

    while(reverseNodes) {
        if(rotations > 0) {
            newResult.next = new ListNode(reverseNodes.val)
        }
        else {
            newResult.next = new ListNode(start.value)
            start = start.next
        }
        newResult = newResult.next
        reverseNodes = reverseNodes.next
        rotations--
    }
    newResult.next = start
    return newResultPointer.next
*/