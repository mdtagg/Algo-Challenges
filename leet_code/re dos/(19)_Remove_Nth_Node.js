//Given the head of a linked list, remove the nth node from the 
//end of the list and return its head.

var removeNthFromEnd = function(head, n) {
    
};

class ListNode {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first node
    insertFirst(data) {
        this.head = new ListNode(data, this.head)
    }
}

// const one = new ListNode(1,null)
// const two = new ListNode(2,one)
// const three = new ListNode(3,two)

const ll = new LinkedList()

ll.insertFirst(1,)