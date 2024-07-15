function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]

var createBinaryTree = function(descriptions) {
  let nodes = new Map();
  let children = new Set();
  
  for (let [parentVal, childVal, isLeft] of descriptions) {
      if (!nodes.has(parentVal)) {
          nodes.set(parentVal, new TreeNode(parentVal));
      }
      let parent = nodes.get(parentVal);
      if (!nodes.has(childVal)) {
          nodes.set(childVal, new TreeNode(childVal));
      }
      let child = nodes.get(childVal);
      if (isLeft) {
          parent.left = child;
      } else {
          parent.right = child;
      }
      children.add(childVal);
  }
  for (let [parentVal, ,] of descriptions) {
      if (!children.has(parentVal)) {
          return nodes.get(parentVal);
      }
  }
};

createBinaryTree(descriptions)

/*
function createBinaryTree(descriptions) {

  const leafMap = new Map();
  let root = descriptions[0][0];

  for(let [ nodeVal,leftVal,isLeft ] of descriptions) {
    if(leafMap.has(nodeVal)) {
      const currNode = leafMap.get(nodeVal);
      const newNode = new TreeNode(leftVal)
      isLeft ? currNode.left = newNode : currNode.right = newNode;
      if(!leafMap.has(leftVal)) {
        leafMap.set(leftVal, new TreeNode(leftVal));
      }
    }
    else {
      const newNode = new TreeNode(nodeVal);
      if(leafMap.has(leftVal)) {
        const currNode = leafMap.get(leftVal)
        if(isLeft) newNode.left = currNode;
        else newNode.right = currNode;
        root = nodeVal;
      }
      else if(isLeft) {
        newNode.left = new TreeNode(leftVal);
      }
      leafMap.set(nodeVal,newNode);
    }
  }
  return leafMap.get(root)
}

function createBinaryTree(descriptions) {
  const numMap = new Map();
  let root = null;
  for(let nums of descriptions) {
    const [ node,left,isLeft ] = nums;
    if(numMap.get(node)) {
      const newNode = numMap.get(node);
      isLeft ? newNode.left = new TreeNode(left) : newNode.right = new TreeNode(left);
    }else {
      numMap.set(node,new TreeNode(node));
      if(root && (root.left.val === left || root.right.val === left)) {
        if(root.right === left) {
          root.right = numMap.get(node);
        }
      }
      else if(numMap.get(left)) {
        const newLeaf = numMap.get(node);
        newLeaf.left = numMap.get(left);
        root = newLeaf;
      }
      else if(isLeft) {
        let leaf = numMap.get(node)
        leaf.left = new TreeNode(left)
        numMap.set(node,leaf)
      }
    }
  }
  return numMap;
}

*/