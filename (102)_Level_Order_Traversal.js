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
root.right.right = new TreeNode(5)

var levelOrder = function(root) {
    // If root is null return an empty array
    if(!root) return []
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declare output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}

levelOrder(root)

/*
INITIAL SOLUTION

var levelOrder = function(root) {
    // If root is null return an empty array
    if(!root) return []
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declare output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.shift()
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}

CODE GRAVEYARD

let left,right
        if(node.left) left = dfs(node.left,level + 1)
        if(node.right) right = dfs(node.right,level + 1)
        if(left) arr[level].unshift(left)
        if(right) arr[level].push(right)

// if(node.left) arr[level].unshift(dfs(node.left,level+1))
        // if(node.right) arr[level].push(dfs(node.right,level+1))
        // let left = dfs(node.left,level + 1)
        // let right = dfs(node.right,level + 1)

        // const stack = []
        // if(left) stack.push(left)
        // if(right) stack.push(right)
        // if(stack.length) arr.unshift(stack)


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