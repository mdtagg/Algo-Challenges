

function Tree(val,left,right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const myTree = new Tree(1)
myTree.left = new Tree(2)
myTree.left.left = new Tree(3)
myTree.left.right = new Tree(4)
myTree.right =  new Tree(2)
myTree.right.left = new Tree(4)
myTree.right.right = new Tree(3)

function isSame(leftRoot,rightRoot) {
  if(
    (!leftRoot && rightRoot) || 
    (leftRoot && !rightRoot) || 
    (leftRoot && rightRoot && leftRoot.val !== rightRoot.val)
    ) {
    return false
  }
  if(leftRoot && rightRoot) {
    return isSame(leftRoot.left,rightRoot.right) && isSame(leftRoot.right,rightRoot.left);
  }
  return true;
}

function isSymmetric(root) {
  return isSame(root.left,root.right)
}

isSymmetric(myTree)


/*

var isSymmetric = function(root) {
  if(!root) return true;
  return isSame(root.left, root.right);
};

var isSame = function(left, right){
  if((!left && right) || (left && !right) || (left && right && left.val !== right.val)) return false;
  if(left && right){
      return isSame(left.left, right.right) && isSame(left.right, right.left);
  }
  return true;
}


function isSymmetric(root) {
  
  let queue = [];
  let symmetric = true;

  function traverseLeft(node) {
    if(!node) return;
    traverseLeft(node.left);
    traverseLeft(node.right)
    queue.push(node.val)
  }

  function traverseRight(node) {
    if(!node) return;
    traverseRight(node.right);
    traverseRight(node.left);
    if(queue.shift() !== node.val) isSymmetric = false;
  }

  traverseLeft(root.left);
  traverseRight(root.right);

  return symmetric
}

// function isSymmetric(root) {
  
//   let leftQueue = [];
//   let rightQueue = [];

//   function dfs(node,queue) {
//     if(!node) {
//       queue.push(null);
//       return;
//     }
//     dfs(node.left,queue);
//     dfs(node.right,queue);
//     queue.push(node.val);

//   }
//   dfs(root.left,leftQueue)
//   dfs(root.right,rightQueue)

//   if(leftQueue.length !== rightQueue.length) return false;
//   let diffs = []
//   for(let i = 0;i < leftQueue.length;i++) {
//     if(leftQueue[i] !== rightQueue[i]) {
//       if(!diffs.length) {
//         diffs = [rightQueue[i],leftQueue[i]];
//       }else {
//         let [ left, right ] = diffs;
//         if(leftQueue[i] !== left || rightQueue[i] !== right) {
//           return false
//         }
//       }
//     }
//   }
//   return true;
// }
*/