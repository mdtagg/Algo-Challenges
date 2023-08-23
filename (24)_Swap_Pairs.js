function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)

var swapPairs = function(head) {
    








    
  };

console.log(swapPairs(l1))

/*
PERFORMANCE SOLUTION

var swapPairs = function(head) {
  var out = new ListNode(0);
  var now = out;

  out.next = head;

  while (now.next && now.next.next) {
    now = swap(now, now.next, now.next.next);
  }

  return out.next;
};

var swap = function (a, b, c) {
  a.next = c;
  b.next = c.next;
  c.next = b;
  return b;
};

INITIAL SOLUTION 

if(!root) return root
    let count = 0
    
    function dfs(node) {
        if(!node.next) return node
        count++
        let prevNode = dfs(node.next)
        if(count % 2 !== 0) {
            node.next = prevNode.next
            prevNode.next = node
            node = prevNode
        }else {
            node.next = prevNode
        }
        count--
        return node
    }
    return dfs(root)


CODE GRAVEYARD

let stack = []
    let node = root 
    let dummy = node

    while(dummy) {
        let temp = stack.pop()
        dummy.next = temp
        stack.push(dummy)
        dummy = temp
        return
    }

let node = root 
    let dummy = node

    while(dummy) {
        let temp = dummy.next
        dummy.next = temp 
        dummy.next = 
    }
*/