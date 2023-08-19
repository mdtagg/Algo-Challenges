function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.left = new TreeNode(5)
// root.right = new TreeNode(3)
// root.right.right = new TreeNode(4)

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(0)

// const root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.right = new TreeNode(5)
// root.left.right.left = new TreeNode(4)
// root.right = new TreeNode(3)
// root.right.left = new TreeNode(6)

const rightSideView = (root) => {
    if(!root) return []
    const result = []

    function dfs(node,level = 0) {
        if(typeof(result[level]) !== 'number') result.push(node.val)
        if(node.right) dfs(node.right,level + 1)
        if(node.left) dfs(node.left,level + 1)
    }
    dfs(root)
    return result
}

rightSideView(root)

/*
CODE GRAVEYARD

if(!root) return []
    const result = []

    function dfs(node) {
        if(!node) return 
        result.push(node.val)
        if(node.right) dfs(node.right)
    }
    dfs(root)
    return result

*/