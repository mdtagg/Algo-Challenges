

function Tree(val,left,right) {
  this.val = val;
  this.right = right;
  this.left = left;
}

const myTree = new Tree(3)
myTree.left = new Tree(9)
myTree.right = new Tree(20)
myTree.right.left = new Tree(15)
myTree.right.right = new Tree(7)

var maxDepth = function(root) {
  if(!root) return 0
  let leftHeight = maxDepth(root.left)
  let rightHeight = maxDepth(root.right)
  return Math.max(leftHeight,rightHeight) + 1
};

console.log(maxDepth(myTree))







/*
 if(!root) return depth;
  depth++;
  return  Math.max(maxDepth(root.left,0),maxDepth(root.right,0))+1
*/