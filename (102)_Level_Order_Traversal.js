function TreeNode(val,left,right) {
    this.val = (val === undefined ? null : val);
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(3)
// root.left = new TreeNode(9) 
// root.right = new TreeNode(20)
// root.right.left = new TreeNode(15)
// root.right.right = new TreeNode(7)

// const root = new TreeNode(1)
// root.left = new TreeNode(2)

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

const levelOrder = (root) => {
    if(!root) return []
    const arr = []

    function dfs(node) {
        if(!node) return null
        let left = dfs(node.left)
        let right = dfs(node.right)
        const stack = []
        if(left) stack.push(left)
        if(right) stack.push(right)
        if(stack.length) arr.unshift(stack)
        return node.val
    }
    let test = dfs(root)
    arr.unshift([test])
    return arr
}

levelOrder(root)

/*
CODE GRAVEYARD

const levelOrder = (root) => {
    if(!root) return []
    const arr = [[root.val]]
    let stack = []

    function dfs(node) {
        
        if(!node)stack.push(null)
        else stack.push(node.val)

        if(stack.length >= 2) {
            let level = []
            while(stack.length) {
                let val = stack.shift()
                if(val) {
                    level.push(val)
                }
            }
            if(level.length) arr.sort().push(level);
            stack = []
        }
        if(!node) return 
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    }
    dfs(root.left)
    dfs(root.right)
    return arr
}

*/