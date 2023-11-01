function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(1)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(2)

function findMode(tree) {
    const numStack = new Map()
    let max = 0
    const modes = []
    dfs(tree)
    function dfs(node) {
        if(!node) return 
        dfs(node.left)
        dfs(node.right)
        numStack.has(node.val) ? numStack.set(node.val,numStack.get(node.val) + 1) : numStack.set(node.val,1)
        if(numStack.get(node.val) > max) max = numStack.get(node.val);
    }
    for(let val of numStack.entries()) {
        const [ num, amt ] = val 
        if(amt === max) modes.push(num)
    }
} 

findMode(tree)