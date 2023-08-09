
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

function mergeTwoLists() {

    if(!l1) {
        return l2
    }

    if(!l2) {
        return l1
    }

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else {
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
}

const mergeKLists = (lists) => {
    let answer = null 
    for(let i = 0;i < lists.length;i++) {
        answer = mergeTwoLists(answer,lists[i])
    }
    return answer
}

mergeKLists([l1,l2,l3])

/*
if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var mergeKLists = function(lists) {
    let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;
 */