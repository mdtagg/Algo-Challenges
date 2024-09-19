function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4)

const rightSideView = (root) => {

  if(!root) return 
  let result = []

  function dfs(node,level=0) {
    if(result[level] === undefined) result.push(node.val)
    if(node.right) dfs(node.right,level + 1)
    if(node.left) dfs(node.left,level + 1)
  }
  dfs(root)

  return result
}

rightSideView(root)

/*
const rightSideView = function(root) {
    
  if(!root) return [root.val]
  let rightQ = [root];
  let leftQ = []
  let res = []

  while(rightQ.length || leftQ.length) {

    let rNode = rightQ.pop()
    let lNode = leftQ.pop()

    if(rNode.right) rightQ.push(rNode.right);
    if(rNode.left) leftQ.push(rNode.left);
    if(leftQ.length && !rightQ.length) res.push(leftQueue[0].val)
    else res.push(rNode.val)

  }
  return res
};
*/