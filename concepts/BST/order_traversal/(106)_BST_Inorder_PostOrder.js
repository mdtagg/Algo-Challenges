function TreeNode(val,left,right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left,
  this.right = left === undefined ? null : right
};

const sampleInputs = [
  [[9,3,15,20,7],[9,15,7,20,3]]
]

var buildTree = function(inorder, postorder) {

  if(inorder.length === 1) return new TreeNode(inorder[0]);

  let iIndex = inorder.length - 1;
  let pIndex = postorder.length - 1;

  function build(stopper) {
    if(inorder[iIndex] !== stopper) {
      const node = new TreeNode(postorder[pIndex--]);
      node.right = build(node.val);
      iIndex--;
      node.left = build(stopper);
      return node
    }
    return null;
  }

  return build()
};

console.log(buildTree(...sampleInputs[0]))






// if(!inorder) return null;
//   if(inorder.length === 1) return new TreeNode(inorder[0]);

//   let inIdx = postorder.length - 1
//   let postIdx = postorder.length-1; 

//   const build = (stopper) => {
//       if(inorder[inIdx] !== stopper) {
//           let node = new TreeNode(postorder[postIdx--]);
//           node.right = build(node.val);
//           inIdx--;
//           node.left = build(stopper);
//           return node;
//       }
//       return null;
//   };

//   return build();

// const buildTree = (inorder,postorder) => {
//   if (inorder.length == 0 || postorder.length == 0) {
//     return null;
// }
//   const rootVal = postorder[postorder.length - 1]
//   const root = new TreeNode(rootVal)
//   const rootIndex = inorder.indexOf(rootVal)
//   const leftInorder = inorder.slice(0,rootIndex)
//   const rightInorder = inorder.slice(rootIndex + 1)
//   const leftPostorder = postorder.slice(0,leftInorder.length)
//   const rightPostorder = postorder.slice(leftInorder.length,postorder.length - 1)
//   root.left = buildTree(leftInorder,leftPostorder)
//   root.right = buildTree(rightInorder,rightPostorder)
//   return root
// }

/*
// var buildTree = function(inorder, postorder) {
//   if (inorder.length == 0 || postorder.length == 0) {
//       return null;
//   }
//   var rootVal = postorder[postorder.length - 1];
//   var root = new TreeNode(rootVal);
//   var rootIndex = inorder.indexOf(rootVal);
//   var leftInorder = inorder.slice(0, rootIndex);
//   var rightInorder = inorder.slice(rootIndex + 1);
//   var leftPostorder = postorder.slice(0, leftInorder.length);
//   var rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
//   root.left = buildTree(leftInorder, leftPostorder);
//   root.right = buildTree(rightInorder, rightPostorder);
//   return root;
// };


function TreeNode(val,left,right) {
  this.left = left || null,
  this.right = right || null,
  this.val = val || null
}

function constructSubtree(array,iIndex,inorder) {
  if(array.length === 3) {
    const leftNode = new TreeNode(array[0])
    const rightNode = new TreeNode(array[1])
    return new TreeNode(array[2],leftNode,rightNode)
  }
  else if(array.length === 2) {
    let [iOne,iTwo] = inorder.slice(iIndex + 1,iIndex + 3);
    return iOne === array[0] ? 
    new TreeNode(iTwo,new TreeNode(iOne)) : 
    new TreeNode(iOne,null,new TreeNode(iTwo))
  }
  else {
    return new TreeNode(array[0])
  }
}

const buildTree = (inorder,postorder) => {
  
  let len = inorder.length
  let iIndex = 0
  let pIndex = 0
  if(len === 1) return new TreeNode(inorder[0])
  if(len === 2) {
    const [iOne,iTwo] = inorder 
    return iOne === postorder[0] ? 
    new TreeNode(iTwo,new TreeNode(iOne)) : 
    new TreeNode(iOne,null,new TreeNode(iTwo))
  }
  
  let res = new TreeNode()
  let dummyNode = res

  while(iIndex < len && pIndex < len) {
    let nodeArray = []
    while(inorder[iIndex] !== postorder[pIndex]) {
      nodeArray.push(postorder[pIndex++])
    }
    if(!nodeArray.length) {
      dummyNode.left = new TreeNode(inorder[iIndex]);
    }else {
      dummyNode.val = inorder[iIndex];
      dummyNode.right = constructSubtree(nodeArray,iIndex,inorder);
    }
    iIndex++
    pIndex++
  }
  return res
}




const nodeArray = []
  const len = inorder.length
  let cursor = inorder[1]
  let iIndex = 1
  let pIndex = 1
  const newTree = new Node(inorder[1])
  newTree.left = new Node(inorder[0])

  while(iIndex < len && pIndex < len) {
    
    if(postorder[pIndex] === cursor) {
      const subtree = constructTree(nodeArray)

    }
    nodeArray.push(postorder[pIndex++])
  }
*/

