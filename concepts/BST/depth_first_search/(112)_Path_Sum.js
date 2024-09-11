

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(5)

// root.left = new TreeNode(4)
// root.left.left = new TreeNode(11)
// root.left.left.left = new TreeNode(7)
// root.left.left.right = new TreeNode(2)

// root.right = new TreeNode(8)
// root.right.left = new TreeNode(13)
// root.right.right = new TreeNode(4)
// root.right.right.right = new TreeNode(1)

const root = new TreeNode(1)
root.left = new TreeNode(2)

const hasPathSum = (root,targetSum) => {
  
  if(!root) return false
  if(!root.left && !root.right && targetSum - root.val === 0) return true;
  return (hasPathSum(root.left,targetSum - root.val) || hasPathSum(root.right,targetSum - root.val))
}

hasPathSum(root,1)

/*
MY SOLUTION
// if(!root) return false
  // let newSum = targetSum - root.val;
  // let left = hasPathSum(root.left,newSum)
  // let right = hasPathSum(root.right,newSum)

  // if(!root.left && !root.right) {
  //   if(newSum === 0) return true
  // }
  // return (left || right)





  if(!root) return false;
  let newSum = targetSum - root.val;
  if(newSum === 0) return true;
  let left = hasPathSum(root.left,newSum)
  let right = hasPathSum(root.right,newSum)

  return left || right
*/