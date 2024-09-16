function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(7)
root.left = new TreeNode(3)
root.right = new TreeNode(15)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(20)

// const countNodes = (root) => {
//   let count = 0

//   function dfs(node) {
//     if(!node) return 
//     dfs(node.left)
//     dfs(node.right)
//     count++
//   }

//   dfs(root)

//   return count
// }

const countNodes = (node) => {
  if(!node) return 0
  const left = countNodes(node.left)
  const right = countNodes(node.right)

  return left + right + 1
}
countNodes(root)