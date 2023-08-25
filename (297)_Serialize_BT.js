

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
// root.right.left = new TreeNode(4)
// root.right.right = new TreeNode(5)

function serialize(root) {
    if(!root) return null;
    const result = {
        val:root.val,
        left:serialize(root.left),
        right:serialize(root.right)
    }
    return result
}

const data = serialize(root)

function deserialize(data) {
    if(!data) return null 

    const result = new TreeNode(data.val)
    result.left = deserialize(data.left)
    result.right = deserialize(data.right)

    return result
}

// const data = serialize(root)
const newData = deserialize(data)

/*
INITIAL SOLUTION 

var serialize = function(root) {

    let data = []
    traverse(root)
    function traverse(node) {
        if(!node) {
            data.push(null)
            return
        }
        data.push(node.val)
        traverse(node.left)
        traverse(node.right)
   }
   return data
};

var deserialize = function(data) {
    
    function traverse() {
        if(!data.length) return 
        const val = data.shift()
        if(val === null) return null 
        const node = new TreeNode(val)
        node.left = traverse()
        node.right = traverse()
        return node
    }
    return traverse(data)
};

 let data = []
    traverse(root)
    function traverse(node) {
        if(!node) {
            data.unshift(null)
            return
        } 
        traverse(node.left)
        data.push(node.val)
        traverse(node.right)
        
    }
    
*/