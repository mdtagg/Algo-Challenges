/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(6)
const p = new TreeNode(2)
root.left = p
// root.right = new TreeNode(8)
const q = new TreeNode(8)
root.right = q

root.left.left = new TreeNode(0)
const w = new TreeNode(4)
root.left.right = w
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)

root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)

function lowestCommonAncestor(root,q,p) {

    if(!root) return root 
    if(q.val < root.val && p.val < root.val) {
        return lowestCommonAncestor(root.left,q,p)
    }else if(q.val > root.val && p.val > root.val) {
        return lowestCommonAncestor(root.right,q,p)
    }else {
        return root
    }
}

lowestCommonAncestor(root,q,p)

/*
PERFORMANCE SOLUTION 

if (!root) return root;

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }

INITIAL SOLUTION

let min = Math.min(p.val,q.val)
    let max = Math.max(p.val,q.val)

    while(root) {
        if(root.val > max) root = root.left;
        else if(root.val < min) root = root.right;
        else return root;
    }


CODE GRAVEYARD

const queue = [root] 
    while(queue.length) {
        const node = queue.pop()
        if(node === q || node === p) {
            return node.val === p.val ? p : q 
        }
        if((node.left === p && node.right === q) || (node.left === q && node.right === p)) {
            return node
        }
        queue.push(node.right,node.left)
    }

const queue = [root]
    while(queue.length) {
        const node = queue.pop()
        if(!node) continue 
        // if(isMatch(node,p,q)) return node
        if(node.left === p && node.right === q) return true  
        if(node === q || node === p) {
            
        }
        queue.push(node.right,node.left)
    }
*/