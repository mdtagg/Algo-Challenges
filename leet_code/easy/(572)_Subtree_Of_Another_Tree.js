
function TreeNode(val,left,right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const root1 = new TreeNode(3)
// root1.left = new TreeNode(4)
// root1.right = new TreeNode(5)
// root1.left.left = new TreeNode(1)
// root1.left.right = new TreeNode(2)
// root1.left.right.left = new TreeNode(0)

// const root2 = new TreeNode(4)
// root2.left = new TreeNode(1) 
// root2.right = new TreeNode(2)

const root1 = new TreeNode(1)
root1.left = new TreeNode(1)
const root2 = new TreeNode(1)


function sameRoot(root1,root2) {
    if(!root1 && !root2) return true 
    if((!root1 && root2) || (root1 && !root2)) return false 
    if(root1.val !== root2.val) return false 
    return sameRoot(root1.left,root2.left) && sameRoot(root1.right,root2.right)
}

function isSubTree(root,subroot) {
    if(!subroot) return true 
    if(!root) return false 
    if(sameRoot(root,subroot)) return true
    return isSubTree(root.left,subroot) || isSubTree(root.right,subroot)
}
    
isSubtree(root1,root2)

/*
PERFORMANCE SOLUTION 

function isSubtree(root, subRoot) {
	if(!subRoot)
		return true;
	if(!root)
		return false
	if(isSameTree(root, subRoot))
		return true;
	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(root1,root2) {
	if(!root1 && !root2)
		return true;
	if((!root1 && root2) || (root1 && !root2))
		return false;
	if(root1.val !== root2.val)
		return false;
	return isSameTree(root1.left, root2.left) && 
		isSameTree(root1.right, root2.right);
}


INITIAL SOLUTION 

function isEqual(root1,root2) {
    if(!root1 || !root2) return !root1 && !root2 
    if(root1.val !== root2.val) return false
    return isEqual(root1.left,root2.left) && isEqual(root1.right,root2.right)
}

function isSubtree(root,subroot) {
    const queue = [root]
    while(queue.length) {
        const node = queue.pop()
        if(!node) continue 
        if(isEqual(node,subroot)) return true 
        queue.push(node.right,node.left)
    }
    return false
}

CODE GRAVEYARD

let match = true

    function dfs(root,subroot) {
        if(!match) return
        if(!root || !subroot) return !root && !subroot
        if(root.val === subroot.val) {
            let left = dfs(root.left,subroot.left)
            let right = dfs(root.right,subroot.right)
            if(!left || !right) {
                match = false
                return false
            }
            return true
        }else {
            if(!subroot.left && !subroot.right) {
                match = false
                return false
            }
            dfs(root.left,subroot)
            dfs(root.right,subroot)
        }
    }
    dfs(root,subroot)
    return match


if(!subroot.left && !subroot.right && root.val === subroot.val) return true
    if(!root || !subroot) {
        if(!subroot && !root) return true 
        if((!subroot && root) || (subroot && !root)) return false 
    }
    if(root.val === subroot.val) {
        if(!subroot.right && !subroot.left) return true
        let left = isSubtree(root.left,subroot.left)
        let right = isSubtree(root.right,subroot.right)
        if(left && right) return true 
        else return false
    }else {
        if(!subroot.left && !subroot.right) return false
        let left = isSubtree(root.left,subroot)
        let right = isSubtree(root.right,subroot)
        if(left || right) return true 
        else return false
    }

const areEqual = (node1, node2) => {
    if (!node1 || !node2) return !node1 && !node2;
    if (node1.val !== node2.val) return false;
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
  }
  const queue = [root];
  while (queue.length) {
    const node = queue.pop();
    if (!node) continue;
    if (areEqual(node, subRoot)) return true;
    queue.push(node.right, node.left);
  }
  return false;

let match = dfs(root,subroot)

    function dfs(root,subroot) {
        if(!subroot) return true
        if(!root && subroot || root && !subroot) return false;
        if(root.val === subroot.val) {
            let left = dfs(root.left,subroot.left)
            let right = dfs(root.right,subroot.right)

            if(left && right) return true;
            else return false;
        }else {
            if(!root && !subroot) return false
            let left = dfs(root.left,subroot)
            let right = dfs(root.right,subroot)
            if(left || right) return true
        }
    }

    return match


if(!subroot) return true
    if(!root && subroot || root && !subroot) return false;
    if(root.val === subroot.val) {
        if(!subroot.left && !subroot.right) return true 
        let left = isSubtree(root.left,subroot.left)
        let right = isSubtree(root.right,subroot,right)
        if(left && right) return true 
        else return false 
    }else {
        let left = isSubtree(root.left,subroot)
        let right = isSubtree(root.right,subroot)
        if(left || right) return true 
        return false
    }


let match = true 

    function dfs(root,subroot) {
        if(!subroot && !root) return true;
        if(!root && subroot || root && !subroot) return false;
        if(root.val === subroot.val) {
            let left = dfs(root.left,subroot.left)
            let right = dfs(root.right,subroot.right)
            if(!left || !right) match = false;
        }else {
            dfs(root.left,subroot)
            dfs(root.right,subroot)
        }
        return true
    }

    dfs(root,subroot)

    return match



    if(!root && !subroot) return true 
    
    if(root.val === subroot.val) {
        let left = isSubtree(root.left,subroot.left)
        let right = isSubtree(root.right,subroot.right)
        if(!left || !right) {
            return false
        }
        return true
    }else {
        let left = isSubtree(root.left,subroot)
        let right = isSubtree(root.right,subroot)
        let current = root.val === subroot.val
        if(!left || !right) return false
    }
*/