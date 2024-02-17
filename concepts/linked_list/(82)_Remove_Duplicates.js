function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const yallist = require('yallist')
const myList = yallist.create([1,1]).head

const deleteDuplicates = (head) => {

    if(!head || !head.next) return head

    let result = new ListNode()
    let resultPointer = result

    while(head) {
        let val = head.value
        if(head.next && head.value === head.next.value) {
            while(head.next && head.next.value === val) head = head.next;
        }else {
            result.next = new ListNode(head.value)
            result = result.next
        }
        head = head.next
    }
    return resultPointer

}

deleteDuplicates(myList)

/*
const deleteDuplicates = (head) => {

    if(!head || !head.next) return head

    let result = new ListNode()
    result.next = head
    let resultPointer = result
    let prev = result

    while(prev.next) {
        let current = prev.next
        if(prev.value !== prev.next.value) {
            result.next = current
            result = result.next
        }
        prev = prev.next
    }
    return resultPointer
}
*/