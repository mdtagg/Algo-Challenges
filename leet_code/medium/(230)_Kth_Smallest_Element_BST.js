/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.right = new TreeNode(4)
root.left.left = new TreeNode(2)
root.left.left.left = new TreeNode(1)

const kthSmallest = (root,k) => {

    let stack = []

    function dfs(node) {
        if(!node) return null
        if(stack.length === k) return 
        dfs(node.left)
        stack.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return stack[k-1]
}

kthSmallest(root,3)

/*
INITIAL SOLUTION

let numbers = []
    
    function dfs(node) {
        if(numbers.length === k) return
        if(node.left) dfs(node.left)
        numbers.push(node.val)
        if(node.right) dfs(node.right)
    }
    dfs(root)
    return numbers[k - 1]

CODE GRAVEYARD

let count = 0
    let dummy = root
    let min = root.val

    while(count < k) {
        if(dummy.left) dummy = dummy.left 
        else if(dummy.right) dummy = dummy.right
        min = Math.min(min,dummy.val)
        count++
        if(!dummy.left && !dummy.right) {
            min = Math.min(min,root.val)
            dummy = root.right
            count++
        }
        count++
    }
    return min

//     function dfs(node) {
//         if(count === k) return
//         if(node.left) dfs(node.left)
//         if(node.right) dfs(node.right)
//         numbers.push(node.val)
//         count++
//     }
//     dfs(root)

let numbers = []
    let count = 0

    while(count < k) {
        while(node.left) {
            node = node.left 
            numbers.push(node.val)
            count++
        }
        node = node.right
        numbers.push(node.val)
        count++
    }
*/
