function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

const inorderTraversal = (root) => {

    let order = []

    function dfs(node,order) {

        if(!node) return 
        if(node.left) dfs(node.left,order)
        order.push(node.val);
        if(node.right) dfs(node.right,order)
        
    }
    
    dfs(root,order)
    return order
}



inorderTraversal(root)

/*
ORIGINAL SOLUTION 

const inorderTraversal = (root) => {

    let order = []
    dfs(root,order)
    return order
}

function dfs(node,order) {

    if(node !== null) {
        dfs(node.left,order)
        order.push(node.val)
        dfs(node.right,order)
    }
    
}
*/
