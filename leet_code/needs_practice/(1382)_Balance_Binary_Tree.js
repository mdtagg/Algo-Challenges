
function Tree(val,left,right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
}

const root = new Tree(1)
root.right = new Tree(2)
root.right.right = new Tree(3)
root.right.right.right = new Tree(4)
root.right.right.right.right = new Tree(5)
root.right.right.right.right.right = new Tree(6)
root.right.right.right.right.right.right = new Tree(7)
root.right.right.right.right.right.right.right = new Tree(8)
root.right.right.right.right.right.right.right.right = new Tree(9)

var balanceBST = function(root) {
    
  let arr =[]
  function dfs(root){
      if(root == null) return;
      dfs(root.left);
      arr.push(root.val);

      dfs(root.right);
  }

  dfs(root);

  return sortedArrayToBST(arr);
};


var sortedArrayToBST = function(nums) {

  
  const fn = (nums, left, right) => {
      if (left >= right) return null;
      const mid = Math.floor((left + right)/2);

      return new Tree(nums[mid], 
                          fn(nums, left, mid), 
                          fn(nums, mid+1, right))
  }
  
  return fn(nums, 0, nums.length)
};

console.log(balanceBST(root))

/*
CODE GRAVEYARD

var inorder = function (root, nodes) {
  if (root === null) return;
  inorder(root.left, nodes);
  nodes.push(root);
  inorder(root.right, nodes);
}

var solve = function (nodes, start, end) {
  if (end < start) return null;
  const mid = Math.floor((end - start) / 2) + start;
  const root = nodes[mid];
  root.left = solve(nodes, start, mid - 1);
  root.right = solve(nodes, mid + 1, end);
  return root;
}

var balanceBST = function (root) {
  if (root === null) return null;
  const inorderTraversal = [];
  inorder(root, inorderTraversal);
  return solve(inorderTraversal, 0, inorderTraversal.length - 1);
}

function balanceBST(root) {
  const belowMid = [];
  const aboveMid = [];
  let max = -Infinity;
  let mid

  function traverse(node) {
    if(!node) return;
    traverse(node.left);
    traverse(node.right);
    max = Math.max(max,node.val);
    mid = Math.ceil(max / 2);
    if(node.val < mid) belowMid.push(node.val);
    else if(node.val > mid) aboveMid.push(node.val);
  }

  traverse(root)

  const newTree = new Tree(mid);
  newTree.left = new Tree(belowMid.pop());
  newTree.right = new Tree(aboveMid.pop());
  let leftPointer = newTree.left;
  let rightPointer = newTree.right;

  while(belowMid.length && aboveMid.length) {
    if(belowMid.length) {
      const lesser = belowMid.pop();
      const greater = belowMid.pop();

      if(!greater) {
        leftPointer.right = new Tree(lesser);
      }
      else {
        
      }
    }

 }

 newTraverse(newTree)
}

function balanceBST(node) {
  let leftPointer = node;
  let rightPointer = node;
  let newTree = new Tree(node.val);

  while(leftPointer && rightPointer) {
    if(!node.left && node.right) {
      rightPointer = node.right;
      if(!rightPointer.left && rightPointer.right) {
        leftPointer.left = rightPointer.right;
        leftPointer = leftPointer.left;
      }
    }
    
  }
}
*/