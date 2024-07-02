function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(4)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(1)
tree.left.right = new TreeNode(3)

tree.right = new TreeNode(7)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(9)


function invertTree(node) {
    if(!node) return null;
    let left = invertTree(node.left);
    let right = invertTree(node.right);

    let swap = left;
    node.left = right;
    node.right = swap;
    return node
}

console.log(invertTree(tree))

// function invertTree(tree) {
//     if(tree === null) return tree 

//     invertTree(tree.left)
//     invertTree(tree.right)

//     let temp = tree.left
//     tree.left = tree.right 
//     tree.right = temp

//     return tree
// }

// invertTree(tree)

/*

INITIAL SOLUTION

var invertTree = function(root) {
    // Base case...
    if(root == null){
        return root
    }
    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    // swapping process...
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root         // Return the root...   
};

if(!tree.left || !tree.right) return
    let left = tree.left 
    let right = tree.right 
    tree.left = right 
    tree.right = left 

    if(tree.left) {
        invertTree(left)
    }
    if(tree.right) {
        invertTree(right)
    }

if(!tree.left || !tree.right) return
    let temp = tree.left
    tree.left = tree.right 
    tree.right = temp

    invertTree(tree.left)
    invertTree(tree.right)

function recurse(left,right) {
        if(left.left) {
            recurse(left.left,left.right)
        }
        if(right.right) {
            recurse(right.left,right.right)
        }
        let temp = left
        left = right
        right = temp
    }

    recurse(tree.left,tree.right)

let n = tree
    let head = n
    while(n) {
        let temp = n.left
        n.left = n.right 
        n.right = temp
        n = temp
    }
*/