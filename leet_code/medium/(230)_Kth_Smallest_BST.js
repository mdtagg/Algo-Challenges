
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(3)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.left.right = new TreeNode(2)

var kthSmallest = function(root, k) {
  const vals = []

  function dfs(node) {
    if(!node) return
    dfs(node.left)
    vals.push(node.val)
    dfs(node.right)
  }
  dfs(root)

  return vals[k - 1]
};

kthSmallest(root,2)