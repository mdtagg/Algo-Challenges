

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

var maxDepth = function(root,depth=0) {
  if(!root) return depth;
  depth++;
  return  Math.max(maxDepth(root.left,0),maxDepth(root.right,0))+1
};

maxDepth(myTree)