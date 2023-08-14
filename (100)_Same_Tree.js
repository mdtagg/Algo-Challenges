function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.right = new TreeNode(3)

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(2)

const isSameTree = (root1,root2) => {

    let same = true

    function dfs(root1,root2) {
        if(!root1 || !root2) {
            same = false 
            return
        }

        if(root1.val === root2.val) {
            dfs(root1.left,root2.left)
            dfs(root1.right,root2.right)
        }else {
            same = false
        }
    }
    
    dfs(root1,root2)
    
    return same
}

isSameTree(root1,root2)

/*
let same = true 
    
    function dfs(root) {

    }

    dfs(root1)
    dfs(root2)

    return same
*/