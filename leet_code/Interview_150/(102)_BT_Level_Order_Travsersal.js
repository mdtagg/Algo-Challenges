
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

const levelOrder = function(root) {
  let result = []

  function dfs(node,level=0) {
    if(!node) return
    result[level] ? result[level].push(node.val) : result[level] = [node.val]
    dfs(node.left,level + 1)
    dfs(node.right,level + 1)
  }
  dfs(root)

  return result
};

levelOrder(root)