/*
Given a binary tree, determine if it is 
height-balanced

(A height-balanced binary tree is a 
binary tree in which the depth 
of the two subtrees of every 
node never differs by more than 
one.)
.
*/

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
tree.left.right.left = new TreeNode(6)

const isBalanced = (tree) => {

    let balanced = true

    function dfs(tree) {

        if(!tree || !balanced) return 0

        let left = dfs(tree.left)
        let right = dfs(tree.right)

        if(Math.abs(left - right) > 1) {
            balanced = false
        }
        return Math.max(left,right) + 1

    }

    dfs(tree)
    
}

isBalanced(tree)

/*
let dfs = function(node) {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    
    return dfs(tree)==Infinity?false:true;

if(!tree) return true

    let balanced = true 

    function dfs(tree) {

        if(!tree || !balanced) return 0

        let left = dfs(tree.left)
        let right = dfs(tree.right)

        if(Math.abs(left - right) > 1) {
            balanced = false
        }

        return Math.max(left,right) + 1
    }

    dfs(tree)

    return balanced
*/