function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(10)
// root.left = new TreeNode(5)
// root.left.left = new TreeNode(3)
// root.left.right = new TreeNode(7)
// root.right = new TreeNode(15)
// root.right.right = new TreeNode(18)

const root = new TreeNode(10)
root.left = new TreeNode(5)
root.left.left = new TreeNode(3)
root.left.left.left = new TreeNode(1)
root.left.right = new TreeNode(7)
root.left.right.left = new TreeNode(6)
root.right = new TreeNode(15)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(18)

const rangeSumBST = (root,low,high) => {
    if(!root) return 0
    let leftVal = rangeSumBST(root.left,low,high)
    let rightVal = rangeSumBST(root.right,low,high)

    if(root.val >= low && root.val <= high) {
        return leftVal + rightVal + root.val
    }

    return leftVal + rightVal 
}

rangeSumBST(root,6,10)