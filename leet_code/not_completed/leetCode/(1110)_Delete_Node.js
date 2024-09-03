
function TreeNode(val,left,right) {
  this.val = val;
  this.right = right;
  this.left = left;
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)


function delNodes(root,toDelete) {
  const res = []

  function traverse(node,toDelete) {
    if(!node) return;
    if(toDelete.includes(node.left.val) && toDelete.includes(node.right.val)) {
      res.push(node.left);
      res.push(node.right);
      for(let node of res) {
        toDelete(node,toDelete)
      }
      node.left = null;
      node.right = null;
    }
    delNodes(node.left,toDelete);
    delNodes(node.right,toDelete);
  }
  traverse(root,toDelete)
  res.push(root)

}

delNodes(root,[3,5])