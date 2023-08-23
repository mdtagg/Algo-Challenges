/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(5)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(6)

// const root = new TreeNode(0)
// root.left = new TreeNode(-1)

// const root = new TreeNode(32)
// root.left = new TreeNode(26)
// root.left.left = new TreeNode(19)
// root.left.left.right = new TreeNode(27)
// root.right = new TreeNode(47)
// root.right.right = new TreeNode(56)

var isValidBST = function(root, min=null, max=null) {






};
isValidBST(root)

/*

var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};


CODE GRAVEYARD

let queue = [root]
    while(queue.length) {
        const node = queue.pop()
        if(!node) continue
        if((node.left && node.left.val >= node.val) ||
            (node.right && node.right.val <= node.val)) {
            return false
        }
        queue.push(node.right,node.left)
    }

    return true

let isValid = true 
    let rootVal = root.val
    if(root.left) dfs(root.left,'left',min=rootVal)
    if(root.right) dfs(root.right,'right',max=rootVal)

    function dfs(node,branch,min,max) {
        if(branch === 'left') min = Math.min(min,node.val)
        if(branch === 'right') max = Math.max(max,node.val)
        if(branch === 'left' && node.val >= rootVal) isValid = false 
        if(branch === 'right' && node.val <= rootVal) isValid = false
        if((branch === 'left' && min < node.val) || (branch === 'right' && max > node.val)) isValid = false 
        if(node.left) dfs(node.left,branch,min)
        if(node.right) dfs(node.right,branch,max)
    }
    return isValid

let isValid = true 
    let left = false
    let right = false

    function dfs(node,max=node.val,left,right) {
        if(left && node.val >= max) isValid = false
        if(right && node.val <= max) isValid = false
        if(node.left) {
            dfs(node.left,max,left=true,right=false)
        }
        if(node.right) {
            dfs(node.right,max,left=false,right=true)
        }
    }
    dfs(root)
    return isValid
*/