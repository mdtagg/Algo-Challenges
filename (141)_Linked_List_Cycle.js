function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const node4 = new ListNode(-4)
const node3 = new ListNode(0,node4)
const node2 = new ListNode(2,node3)
const l1 = new ListNode(3,node2)
// node4.next = node2

const hasCycle = (head) => {

}

hasCycle(l1)

/*
PERFORMANCE SOLUTION

let slow = head
    let fast  = head
    while(fast && fast.next)
    {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false

INITIAL SOLUTION

const map = new Map()
    let n = head

    while(n) {
        if(map.has(n)) {
            return true
        }
        map.set(n,n)
        n = n.next
    }
    return false


*/