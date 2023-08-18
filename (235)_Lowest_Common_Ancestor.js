function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(6)
const p = new TreeNode(2)
root.left = p
root.right = new TreeNode(8)
const q = new TreeNode(8)
root.right = q

root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)

root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)

function lowestCommonAncestor(root,q,p) {
    
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