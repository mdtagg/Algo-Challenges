/*
Given the roots of two binary trees 
p and q, write a function to check 
if they are the same or not.

Two binary trees are considered 
the same if they are structurally 
identical, and the nodes have the 
same value.
*/

function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root1 = new TreeNode(1)
root1.left = new TreeNode(2)
root1.right = new TreeNode(3)

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(2)

function isSameTree(root1,root2) {

    if(!root1 && !root2) return true;
    if(!root1 || !root2) return false;
    if(root1.val !== root2.val) return false;
    return isSameTree(root1.left,root2.left) && isSameTree(root1.right,root2.right)

}

console.log(isSameTree(root1,root2))


//REDO SOLUTION 

// function isSameTree(root1,root2) {

//     if((!root1 && root2) || (root1 && !root2)) return false
//     if((!root1 && !root2)) return true;
//     let left = isSameTree(root1.left,root2.left)
//     let right = isSameTree(root1.right,root2.right)
//     if(root1.val !== root2.val) return false
//     return left && right

// }

// function isSameTree(p,q) {
//     if(!p && !q) return true;
//     if( (!p && q || p && !q) || (p.val !== q.val)) return false;
//     let left = isSameTree(p.left,q.left);
//     let right = isSameTree(p.right,q.right);
  
//     if(left === false || right === false) return false;
//     else return true
//   }

// const isSameTree = (root1,root2) => {

//     let same = true

//     function dfs(root1,root2) {
//         if(!root1 && !root2) return
//         if(root1.val !== root2.val || !root1 || !root2) same = false;
//         dfs(root1.left,root2.left)
//         dfs(root1.right,root2.right)
//     }

//     dfs(root1,root2)

//     return same
// }

// isSameTree(root1,root2)

/*

if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);


  let same = true

    function dfs(root1,root2) {
        if(!root1 || !root2) {
            same = false 
            return
        }

        if(root1.val === root2.val) {
            dfs(root1.left,root2.left)
            dfs(root1.right,root2.right)
        }else {
            same = false
        }
    }
    
    dfs(root1,root2)
    
    return same


let same = true 
    
    function dfs(root) {

    }

    dfs(root1)
    dfs(root2)

    return same
*/