function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(4)
root.left = new TreeNode(9)
root.left.left =  new TreeNode(5)

root.right =  new TreeNode(0)
root.left.right = new TreeNode(1)

const sumNumbers = (root) => {
  if(!root) return 0
  let total = 0

  function dfs(node,sum) {

    sum *= 10;
    sum += node.val

    if(!node.left && !node.right) {
      total += sum
      return
    }

    if(node.left) dfs(node.left,sum)
    if(node.right) dfs(node.right,sum)
  }
  dfs(root,0)
  return total
}

sumNumbers(root)

/*
const sumNumbers = (root) => {

  let nums = ""
  let total = 0

  function dfs(node) {
    if(!node) return 0 
    nums += node.val.toString()
    dfs(node.left)
    dfs(node.right)

    if(!node.left && !node.right) {
      total += parseInt(nums);
    }
    nums = nums.slice(0,nums.length - 1)
  }
  dfs(root)
  return total
}
*/