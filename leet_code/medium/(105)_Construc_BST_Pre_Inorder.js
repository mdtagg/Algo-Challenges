
function TreeNode(val,left,right) {
  this.val = val;
  this.right = right;
  this.left = left;
}

var buildTree = function(preorder, inorder) {
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
};

buildTree([3,9,20,15,7],[9,3,15,20,7])

/*


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