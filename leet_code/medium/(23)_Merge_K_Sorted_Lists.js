
/*
You are given an array of k linked-lists lists, 
each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted 
linked-list and return it.
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1 = new ListNode(1)
l1.next = new ListNode(4)
l1.next.next = new ListNode(5)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

const l3 = new ListNode(2)
l3.next = new ListNode(6)

function mergeTwoLists(l1,l2) {
    if(!l1) return l2 
    if(!l2) return l1

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else {
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
}

function mergeKLists(lists) {
    let result = null 
    for(let i = 0;i < lists.length;i++) {
        result = mergeTwoLists(result,lists[i])
    }
    return result
}

mergeKLists([l1,l2,l3])

/*
PERFORMANCE SOLUTION

var mergeKLists = function(lists) {
    const allNodes = [];
    for(let list of lists){
        while(list){
            allNodes.push(list.val);
            list = list.next;
        }
    }
    allNodes.sort((a,b)=>a-b);
    const res = new ListNode(-1,null);
    let curr = res;
    for(let val of allNodes){
        const node = new ListNode(val);
        curr.next = node;
        curr = node;
    }
    return res.next;

};

INITIAL SOLUTION

function mergeTwoLists(l1,l2) {
    if(!l1) {
        return l2
    }
    if(!l2) {
        return l1
    }
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }
    else {
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
}

function mergeKLists(lists) {
    let answer = null
    for(let i = 0;i < lists.length;i++) {
        answer = mergeTwoLists(answer,lists[i])
    }
    return answer
}
 */