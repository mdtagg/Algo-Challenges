function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(8)
root.left = new TreeNode(3)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(6)
root.left.right.left = new TreeNode(4)
root.left.right.right = new TreeNode(7)
root.right = new TreeNode(10)
root.right.right = new TreeNode(14)
root.right.right.left = new TreeNode(13)

var maxAncestorDiff = function(root) {

    if(!root) return 
    let result = 0
    traverse(root,root.val,root.val)
    return result

    function traverse(root,maxVal,minVal) {
        if(!root) return 
        maxVal = Math.max(maxVal,root.val)
        minVal = Math.min(minVal,root.val)
        result = Math.max(result,Math.max(Math.abs(minVal - root.val),Math.abs(maxVal - root.val)))
        traverse(root.left,maxVal,minVal)
        traverse(root.right,maxVal,minVal)
    }
};

maxAncestorDiff(root)

/*
var maxAncestorDiff = function(root) {
    if (!root)
        return 0;
    let diff = 0;
    helper(root, root.val, root.val);
    return diff;

    function helper(root, minVal, maxVal) {
        if (!root)
            return;
        diff = Math.max(diff, Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));
        minVal = Math.min(minVal, root.val);
        maxVal = Math.max(maxVal, root.val);
        helper(root.left, minVal, maxVal);
        helper(root.right, minVal, maxVal);
    }
};

const maxAncestorDiff = (root) => {
    let result = 0
    let max = root.val
    let min = Infinity
    function dfs(root) {
        if(!root) return 

        dfs(root.left)
        if(root.left && root.right) {
            result = Math.max(result,max - min)
            min = root.val
            max = root.val
        }
        dfs(root.right)

        max = Math.max(max,root.val)
        min = Math.min(min,root.val)
       
    }
    
    dfs(root)

}



const maxAncestorDiff = (root) => {
    let max = 0

    function dfs(root,currVal) {
        if(root.left && root.right) {
            dfs(root.left,root.val)
            dfs(root.right,root.val)
        }
        
        if(root.left) dfs(root.left,currVal);
        if(root.right) dfs(root.right,currVal);
        
        let diff = Math.abs(currVal - root.val)
        if(max < diff) max = diff;
        

    }
    dfs(root,root.val)
}
*/