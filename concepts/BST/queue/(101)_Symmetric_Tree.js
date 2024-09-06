function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(8)

root.right = new TreeNode(2)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)
root.right.left.left = new TreeNode(8)

function isSame(root) {
  if(!root) return false;
  let queue = [root.left,root.right];
  while(queue[0]) {
    let left = queue.shift();
    let right = queue.shift();
    if(!left && !right) continue;
    if(!left || !right || left.val !== right.val) return false;
    queue.push(left.left,right.right)
    queue.push(left.right,right.left)
  }
  return true
}
isSame(root)

/*

function isSame(root) {

  if(!root) return false;

  function BFS(root1,root2) {

    if(!root1 && !root2) return true;
    if(!root1 || !root2) return false;
    let temp = root2.left;
    root2.left = root2.right;
    root2.right = temp;

    let left = BFS(root1.left,root2.left);
    let right = BFS(root1.right,root2.right);

    if(root1.val !== root2.val) return false
    return left && right
  }

  BFS(root.left,root.right)
}

*/