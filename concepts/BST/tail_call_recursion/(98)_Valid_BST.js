function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(5)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(5)


const isValidBST = (node,left=-Infinity,right=Infinity) => {
  if(!node) return true
  if(!(node.val >left && node.val < right)) return false
  return isValidBST(node.left, left, node.val) && isValidBST(node.right, node.val, right)
}

isValidBST(root)


/*
First Attempt

const isValidBST = function(root) {

  const vals = []
  
  function bfs(node) {
    if(!node) return;
    bfs(node.left)
    vals.push(node.val)
    bfs(node.right)
  }
  bfs(root)

  let min = vals[0]
  for(let i = 1;i < vals.length;i++) {
    if(vals[i] < min) return false;
    min = vals[i]
  }
  return true
};


*/