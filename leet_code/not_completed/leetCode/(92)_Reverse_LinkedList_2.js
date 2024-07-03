
const yallist = require('yallist')
const myList = yallist.create([1,2,3,4,5,6,7,8]).head

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const reverseBetween = (head,left,right) => {
    let result = new ListNode()
    result.next = head 
    let prev = result 

    for(let i = 0;i < left - 1;i++) {
        prev = prev.next 
    }

    let current = prev 

    for(let i = 0;i < right - left;i++) {
        let nextNode = current.next 
        current.next = nextNode.next
        nextNode.next = prev.next 
        prev.next = nextNode
    }
    return result.next
}
reverseBetween(myList,2,6)

/*

const reverseBetween = (head,left,right) => {

    left -= 1
    right -= 1
    let result = new ListNode()
    let resultPointer = result
    let pointer = head 

    while(left) {
        result.next = new ListNode(pointer.value)
        result = result.next
        pointer = pointer.next
        left--
    }
    while(right) {
        let prevNode = new ListNode(pointer.value)
        prevNode.next = result.next || null
        result.next = prevNode
        pointer = pointer.next
        right--
    }
    while(result.next) {
        result = result.next
    }
    result.next = pointer
    return resultPointer
}

const reverseBetween = (head,left,right) => {

    if(!head || left === right) return head

    let result = new ListNode()
    result.next = head 
    let prev = result

    for(let i = 0;i < left - 1;++i) {
        prev = prev.next
    }

    let current = prev.next

    for(let i = 0;i < right - left;++i) {
        //super confusing...
        //current is static, but because its linked to prev any change to current will change prev
        //this doesnt matter though because prevs next value gets reset at the end

        //we are on 2 to start 
        //next node becomes 3 
        //currents next val becomes 4 for use on next iteration
        //next nodes next val becomes 2 since prev is a step behind
        //prevs next val gets set to the next node we have altered
        const nextNode = current.next
        current.next = nextNode.next 
        nextNode.next = prev.next 
        prev.next = nextNode
    }
    return result.next
}
*/