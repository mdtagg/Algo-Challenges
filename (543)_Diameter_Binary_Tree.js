function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
// tree.left.right.right = new TreeNode(6)


const diameterOfBinaryTree = (tree) => {

}

diameterOfBinaryTree(tree)

/*
let diameter = 0;
    
    dfs(tree);
    
    return diameter;
    
    function dfs(node) {
        if (!node) return 0;
        
        //these are aggregators for each branch
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }
*/