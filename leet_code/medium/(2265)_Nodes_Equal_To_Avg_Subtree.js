function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(4)
tree.left = new TreeNode(8)
tree.right = new TreeNode(5)
tree.left.left = new TreeNode(0)
tree.left.right = new TreeNode(1)
tree.right.right = new TreeNode(6)

function averageOfSubtree(tree) {

    let result = 0
    function dfs(node) {

        if(!node) return {sum:0,seen:0}
        const left = dfs(node.left)
        const right = dfs(node.right)
        const sum = left.sum + right.sum + node.val
        const seen = left.seen + right.seen + 1
        
        if(Math.floor(sum / seen) === node.val) result++
        return { sum, seen }
    }
    dfs(tree)

    return result
}

averageOfSubtree(tree)

/*

ORIGINAL SOLUTION 

function averageOfSubtree(tree) {

    let result = 0
    dfs(tree,0,0)
    function dfs(node,total,seen) {
        if(node == undefined) return
        const left = dfs(node.left,total,seen)
        const right = dfs(node.right,total,seen)

        if(!left && !right) {
            total += node.val
            seen += 1
        }
        else if(left && right) {
            total += left.total + right.total + node.val
            seen = left.seen + right.seen + 1
        }
        else if(left) {
            total = left.total + node.val
            seen = left.seen + 1
        }
        else if(right) {
            total = right.total + node.val
            seen = right.seen + 1
        }
        if(Math.floor(total / seen) === node.val) result++
        return { total, seen }
    }
    return result
    
}
*/