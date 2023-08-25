function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(-10)
// root.left = new TreeNode(9)
// root.right = new TreeNode(20)
// root.right.left = new TreeNode(15)
// root.right.right = new TreeNode(7)
// root.right.left.right = new TreeNode(2)
// root.right.left.left = new TreeNode(1)
// root.right.right.right = new TreeNode(2)
// root.right.right.left = new TreeNode(1)

const root = new TreeNode(-2)
root.right = new TreeNode(-3)

const maxPathSum = (root) => {
    let max = -Number.MAX_VALUE
    getMax(root)
    function getMax(node) {
        if(!node) return 0
        let left = getMax(node.left)
        let right = getMax(node.right)
        max = Math.max(max,node.val + left + right)
        return Math.max(0,node.val + left,node.val + right)
    }
}

console.log(maxPathSum(root))

/*
CODE GRAVEYARD

if(!root.left && !root.right) return root.val
    let sums = []
    
    function dfs(node) {
        if(!node) return null
        let left = dfs(node.left)
        let right = dfs(node.right)
        if(left) {
            let highestNodeVal = Math.max(node.val,left)
            let sum = left + node.val
            sums.push(Math.max(highestNodeVal,sum))
        }
        if(right) {
            let highestNodeVal = Math.max(node.val,right)
            let sum = right + node.val
            sums.push(Math.max(highestNodeVal,sum))
        } 
        if(left && right) {
            let sum = left + node.val + right
            sums.push(sum)
        }     
        return node.val
    }
    dfs(root)
    return Math.max(...sums)
*/