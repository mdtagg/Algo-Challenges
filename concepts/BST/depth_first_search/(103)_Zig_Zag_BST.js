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

/*
Queue
*/

function zigzagLevelOrder(root) {
  if(!root) return []
  let level = 0
  let queue = [root]
  const result = []

  while(queue.length) {

    result[level] = []
    let currentLevel = []

    for(let node of queue) {
      level % 2 === 0 ? 
      result[level].push(node.val) : 
      result[level].unshift(node.val)

      if(node.left) currentLevel.push(node.left)
      if(node.right) currentLevel.push(node.right)
    }
    queue = currentLevel
    level += 1
  }
  return result
}
zigzagLevelOrder(root)

/*
Recursive
*/
// function zigzagLevelOrder(root) {

//   const result = []

//   function dfs(node,level=0) {

//     if(!node) return
//     dfs(node.left,level + 1)
//     dfs(node.right,level + 1)

//     if(result[level] == undefined) result[level] = []

//     level % 2 === 0 ? 
//     result[level].push(node.val) : 
//     result[level].unshift(node.val)
//   }
//   dfs(root)
//   return result
// }
// zigzagLevelOrder(root)