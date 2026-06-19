function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function deleteMiddle(head) {
  
  if(!head.next) {
    head.next = null;
    return head;
  }
  let node = head;
  let count = 0;

  while(node) {
    node = node.next;
    count++;
  }

  count = Math.floor(count / 2) - 1;

  node = head;
  let newCount = 0;

  while(node) {
    if(newCount === count) {
      node.next = node.next.next;
      return head;
    }
    node = node.next;
    newCount++
  }
  return head;
  
}

const root = new ListNode();
root.next = new ListNode(1);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);
root.next.next.next.next = new ListNode(7);
root.next.next.next.next.next = new ListNode(1);
root.next.next.next.next.next.next = new ListNode(2);
root.next.next.next.next.next.next.next = new ListNode(6);

const root2 = new ListNode();
root2.next = new ListNode(1);
root2.next.next = new ListNode(2);
root2.next.next.next = new ListNode(3);
root2.next.next.next.next = new ListNode(4);

// const root3 = new ListNode();
const root3 = new ListNode(2);
root3.next = new ListNode(1);

const root4 = new ListNode(1);

console.log(deleteMiddle(root));

// function deleteMiddle(head) {

//   let currNode = head;
//   let count = 0;
//   let nodeMap = new Map();

//   if(!head.next) {
//     head = head.next
//     return head
//   }

//   while(currNode) {
//     nodeMap.set(count,currNode)
//     count++
//     currNode = currNode.next;
//   }

//   count = Math.floor(count/2);
//   let node = nodeMap.get(count - 1);
//   node.next = !node.next ? null : node.next.next;
//   return head
// }

// var deleteMiddle = function(head) {
//   let count = 0;
//   let current = head;

//   while(current !== null) {
//     current = current.next;
//     count++;
//   }

//   if(count < 2) return null;

//   count = Math.floor(count / 2);
//   current = head;

//   while(count > 1) {
//     current = current.next;
//     count--;
//   }

//   current.next = current.next.next;
//   return head;
// };

// function traverse(head,count) {
//   let index = count;
//   if(!head.next) return Math.ceil(count / 2);
//   const idx = traverse(head.next,++count);
//   if(idx === index - 1) {
//     head = head.next;
//   }
//   return idx;
// }

// var deleteMiddle = function(head) {
//     let count = 0;
//     return traverse(head,count);
// };

// var deleteMiddle = function(head) {

//     let cursor = head;
//     let count = 0;
//     let map = new Map();

//     while(cursor.next) {
//       map.set(count,cursor);
//       cursor = cursor.next;
//       count++;
//     }

//     count = Math.ceil(count / 2);
//     let newHead = head;
//     // newHead = map.get(count - 1);
//     newHead.next = (map.get(count + 1) || null);
// };
