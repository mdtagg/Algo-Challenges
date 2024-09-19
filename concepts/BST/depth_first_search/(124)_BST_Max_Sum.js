

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.right = new TreeNode(7)
root.right.left = new TreeNode(15)

const maxPathSum = (root) => {
  let max = -Infinity

  function dfs(node) {
    
    if(!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    max = Math.max(max,node.val + left + right)
    return Math.max(0,node.val + left,node.val + right)
  }

  dfs(root)
  return max
}

maxPathSum(root)