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
    if(!head){
        return null;
      }
    
      const map = new Map();
      function helper(head){
        if(!head){
          return null;
        }
    
        if(map.has(head)){
          return map.get(head);
        }
    
        const newNode = new ListNode(head.val);
        map.set(head, newNode);
    
        newNode.next = helper(head.next);
        newNode.random = helper(head.random);
    
        return newNode;
      }
      return helper(head);
}

console.log(copyRandomList(node1))

/*
PERFORMANCE SOLUTION

if(!head){
    return null;
  }

  const map = new Map();
  function helper(head){
    if(!head){
      return null;
    }

    if(map.has(head)){
      return map.get(head);
    }

    const newNode = new Node(head.val);
    map.set(head, newNode);

    newNode.next = helper(head.next);
    newNode.random = helper(head.random);

    return newNode;
  }
  return helper(head);

INITIAL SOLUTION

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


CODE GRAVEYARD

if(!head) return null 

    let newList = new ListNode(head.val)
    let pointer = newList
    let left = head.next

    let stack = []
    let counter = 0

    while(left) {
        let val = left.val
        let index = left.random
        if(stack.length && stack[0][1] === counter) {
            let newPointer = stack.pop()
            newPointer.random = stack[0][0]
        }
        pointer.next = new ListNode(val)
        stack.push(pointer,index)
        pointer = pointer.next
        left = left.next
        counter++
    }
    console.log(newList)


*/