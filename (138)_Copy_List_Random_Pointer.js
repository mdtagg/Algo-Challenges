function ListNode(val,next,random) {
    this.val = val
    this.next = next
    this.random = random
}

// const node5 = new ListNode(5)
const node4 = new ListNode(4,undefined,1)
const node3 = new ListNode(3,node4,0)
const node2 = new ListNode(2,node3,3)
const node1 = new ListNode(1,node2,2)

const copyRandomList = (head) => {
    if(!head) {
        return null;
      }
      const clones = new Map();
      let n = head;
      while(n) {
        clones.set(n, new ListNode(n.val));
        n = n.next
      }
      n = head;
      while(n) {
        clones.get(n).next = clones.get(n.next) || null;
        clones.get(n).random = clones.get(n.random) || null;
        n = n.next
      }
      return clones.get(head);
}

copyRandomList(node1)

/*
INITIAL SOLUTION

if(!head) {
      return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
      clones.set(n, new Node(n.val));
      n = n.next
    }
    n = head;
    while(n) {
      clones.get(n).next = clones.get(n.next) || null;
      clones.get(n).random = clones.get(n.random) || null;
      n = n.next
    }
    return clones.get(head);

*/