function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(3)

tree.right = new TreeNode(7)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(9)

const maxDepth = (tree) => {

    
    
}

console.log(maxDepth(tree))















/*
if(tree === undefined || tree === null) {
        return 0
    }

    return Math.max(maxDepth(tree.left),maxDepth(tree.right)) + 1
*/