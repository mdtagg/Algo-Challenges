function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)

var getMinimumDifference = function(root) {

  let result = []
  let min = Infinity

  function dfs(node) {
    if (!node) return
    node.left && dfs(node.left)
    result.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root)

  for(let i = 0;i < result.length - 1;i++) {
    min = Math.min(min,result[i + 1] - result[i])
  }
  return min
};

getMinimumDifference(root)

/*
let queue = [root]
  const result = [-Infinity,Infinity]
  let abs = -Infinity

  while(queue.length) {
    let currentLevel = []
    for(let node of queue) {
      if(node.val < result[1]) {
        result[1] = node.val
      }
      if(node.val < result[0]) {
        result[0] = node.val
      }
    }
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }
*/