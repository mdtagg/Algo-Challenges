
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(3)
root.left = new TreeNode(5)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)
root.right = new TreeNode(1)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

const lowestCommonAncestor = (root,p,q) => {

  if(root === null || p === root || q === root) return root

    const left  = lowestCommonAncestor(root.left,p,q)
    const right  = lowestCommonAncestor(root.right,p ,q)

    if(left!==null && right!==null) return root

    return left!=null ? left : right

}

lowestCommonAncestor(root,5,4)

/*
if(root === null || p === root || q === root) return root

    const left  = lowestCommonAncestor(root.left,p,q)
    const right  = lowestCommonAncestor(root.right,p ,q)

    if(left!==null && right!==null) return root

    return left!=null ? left : right



let left
  let right
  dfs(root.left)
  if(left && right) return root.val;
  dfs(root.right)

  return right

  function dfs(node) {
    if(!node) return false;
    dfs(node.left)
    dfs(node.right)

    if(node.val === p || node.val === q) {
      if(left) {
        right = node.val;
        return
      }
      left = node.val;
    }
  }



let lNode = null
  let qNode = null
  const isLeft = dfs(root.left)
  const isRight = dfs(root.right)


  function dfs(node) {
    if(lNode && qNode) return
    dfs(node.left)
    dfs(node.right)

    if(node.val === p || node.val === q) {
      tNode = node
    }
  }
*/