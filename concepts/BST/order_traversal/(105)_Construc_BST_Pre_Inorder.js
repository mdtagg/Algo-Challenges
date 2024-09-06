
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {

  let pIndex = 0;
  let iIndex = 0;

  function build(stopper) {
    if(inorder[iIndex] !== stopper) {
      const node = new TreeNode(preorder[pIndex++]);
      node.left = build(node.val);
      iIndex++;
      node.right = build(stopper)
      return node
    }
    return null
  }
  return build()
};

buildTree([3,9,20,15,7],[9,3,15,20,7])







/*
let p = 0;
  let i = 0;

  function build(stop) {
    if(inorder[i] !== stop) {
      const root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  }
  return build()

var buildTree = function(preorder, inorder) {
  let p = 0
  let i = 0

  function build(stop) {
      if(inorder[i] !== stop) {
          let root = new TreeNode(preorder[p++])
          root.left = build(root.val)
          i++
          root.right = build(stop)
          return root
      }
      return null
  }
  return build()
};
*/