function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const root = new TreeNode(3)
// root.left = new TreeNode(1)
// root.left.left = new TreeNode(3)
// root.right = new TreeNode(4)
// root.right.left = new TreeNode(1)
// root.right.right = new TreeNode(5)

// const root = new TreeNode(2)
// root.right = new TreeNode(4)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(8)
// root.right.right.left = new TreeNode(4)

const root = new TreeNode(9)
root.right = new TreeNode(3)
root.right.left = new TreeNode(6)

const goodNodes = (root) => {
    let goodNodes = 0
    
    function dfs(node,max=node.val) {
        if(node.val >= max) goodNodes++
        max = Math.max(max,node.val)
        if(node.left) dfs(node.left,max)
        if(node.right) dfs(node.right,max)
    }
    dfs(root)
    return goodNodes
}

goodNodes(root)

/*
CODE GRAVEYARD

if(!root) return 0 
    let goodNodes = 0
    
    function dfs(node,lowestVal=node.val) {
        if(!goodNodes || node.val >= lowestVal) goodNodes++
        lowestVal = node.val
        if(node.left) dfs(node.left,lowestVal)
        if(node.right) dfs(node.right,lowestVal)
    }
    dfs(root)
    return goodNodes

if(!root) return 0
    let paths = 0

level.push(node.val)
        if(!node.left && !node.right) level.shift()
        if(node.val >= level[0]) paths++;
        if(node.left) level.push(node.left)
        if(node.right) level.push(node.right)
        queue.pop()
    
    function dfs(node,path = []) {
        path.push(node.val)
        if(node.val >= path[0]) paths++
        if(node.left) dfs(node.left,path)
        if(node.right) dfs(node.right,path)
        path.pop()
    }
    dfs(root)
    return paths

&& node.right.val <= path[0]

if(!root) return 0
    let paths = 0
    
    function dfs(node,path = []) {
        if(!node.left && !node.right) paths++
        path.push(node.val)
        if(node.left && node.left.val <= path[0]) dfs(node.left,path)
        if(node.right && node.right.val <= path[0]) dfs(node.right,path)
        path.pop()
    }
    dfs(root)
*/