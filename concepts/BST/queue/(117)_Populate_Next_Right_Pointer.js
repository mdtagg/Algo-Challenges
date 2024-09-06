

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

const root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(4)
root.left.right = new Node(5)

root.right = new Node(3)
root.right.right = new Node(7)

var connect = function(root) {

  if(!root) return null
  let queue = [root]

  while(queue.length) {
    const newQueue = []
    for(let i = 0;i < queue.length;i++) {
      let node = queue[i]
      if(node) {
        if(node.left) newQueue.push(node.left)
        if(node.right) newQueue.push(node.right)
        node.next = queue[i + 1] || null
      }
    }
    queue = newQueue
  }
  return root
};

console.log(connect(root))

/*
let queue = [];
  if(root == null) return null;
  queue.push(root);
  while(queue.length != 0){
      let newQueue = [];
      for (let i = 0; i < queue.length; i++) {
          let node = queue[i];
          if (node) {                
              if (node.left) newQueue.push(node.left);
              if (node.right) newQueue.push(node.right);
              node.next = queue[i+1] || null;
          } 
      }
      queue = newQueue;
  }
  return root;
*/