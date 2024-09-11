function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)

root.right = new TreeNode(5)
root.right.right = new TreeNode(6)

// const flatten = (root) => {

//   if(!root) return []

//   let lesserQueue = [root]
//   let higherQueue = []
//   const ll = new TreeNode()
//   let dummyNode = ll

//   while(lesserQueue.length || higherQueue.length) {
//     // let higherNode = higherQueue.shift()

//     while(lesserQueue.length) {
//       let lesserNode = lesserQueue.shift()
//       if(lesserNode.left) lesserQueue.push(lesserNode.left)
//       if(lesserNode.right) higherQueue.unshift(lesserNode.right)
//       dummyNode.right = new TreeNode(lesserNode.val)
//       dummyNode = dummyNode.right;
//     }

//     while(higherQueue.length) {
//       let higherNode = higherQueue.shift()
//       if(higherNode.left) higherQueue.push(higherNode.left)
//       if(higherNode.right) higherQueue.push(higherNode.right)
//       dummyNode.right = new TreeNode(higherNode.val)
//       dummyNode = dummyNode.right;
//     }
//   }
//   return ll.right
// };

var flatten = function(root) {

  if(!root) return null;

  flatten(root.left);
  flatten(root.right);

  if(root.left) {

    let left = root.left;
    let right = root.right;

    while(left.right) left = left.right;

    left.right = right;
    root.right = root.left ;
    root.left = null;
  }
};

console.log(flatten(root))

/*
if (root == null) {
    //base case
    return root;
  }

  flatten(root.left);
  flatten(root.right);

  if (root.left != null) {
    let left = root.left; //find innermost right
    let right = root.right; // assign right on innermost right from left

    while( left.right != null ) { // find the innermost left
      left = left.right 
    }

    left.right = right;  //asign the right on the innermost left side
    root.right  = root.left; // set root right to left
    root.left = null; //set root left to null
  }

const flatten = (root) => {

  const ll = new TreeNode();
  let dummyNode = ll;

  function DFS(node) {
    if(!node) return;
    dummyNode.right = new TreeNode(node.val)
    dummyNode = dummyNode.right
    DFS(node.left)
    DFS(node.right)

  }
  DFS(root)
  return ll.right

};

  const queue = [root];
  const ll = new TreeNode();
  let dummyNode = ll
  // let tNode = root

  while(queue[0]) {
    let currNode = queue.shift()
    dummyNode.right = new TreeNode(currNode.val)
    dummyNode = dummyNode.right 
    if(currNode.left) {
      queue.push(currNode.left);
    }
    if(currNode.right) queue.

  }

*/