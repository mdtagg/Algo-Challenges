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
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(8)

var leafSimilar = function(root1, root2) {

    let leafs1 = []
    let leafs2 = []
    dfs(root1,leafs1)
    // dfs(root2,leafs2)

    function dfs(root,arr) {
        if(!root.left && !root.right) {
            arr.push(root.val)
            return
        } 
        dfs(root.left,arr)
        dfs(root.right,arr)
    }
    let maxIdx = Math.max(...leafs1,...leafs2)
    for(let i = 0;i < maxIdx ;i++) {
        if(leafs1[i] !== leafs2[i]) return false
    }
    return true
};

leafSimilar(root)

/*
var leafSimilar = function(root1, root2) {

    let leafs1 = []
    let leafs2 = []
    dfs(root1,leafs1)
    // dfs(root2,leafs2)

    function dfs(root,arr) {
        if(!root) return 
        let leftVal = dfs(root.left,arr)
        let rightVal = dfs(root.right,arr)
        
        if(!leftVal && !rightVal) {
            arr.push(root.val)
            return root.val
        }

        // return leftVal + rightVal + str
    }
    return leafs1 === leafs2 ? true : false
};
*/