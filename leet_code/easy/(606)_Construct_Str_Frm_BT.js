function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode('1')
root.left = new TreeNode('2')
root.left.left = new TreeNode('4')
root.right = new TreeNode('3')
// root.right.right.right.right = new TreeNode('5')
// root.right.right.right.right.right = new TreeNode('6')

const tree2str = (root) => {
    let result = [];
    dfs(root, result);
    return result.join('');

    function dfs(node, result) {
        if (node === null)
            return;

        result.push(node.val);

        if (node.left === null && node.right === null)
            return;

        result.push('(');
        dfs(node.left, result);
        result.push(')');

        if (node.right !== null) {
            result.push('(');
            dfs(node.right, result);
            result.push(')');
        }
    }
};

console.log(tree2str(root))

/*
PERFORMANCE SOLUTION

var tree2str = function(root) {
    if(!root) return '';
    if(!root.left && !root.right) return root.val + '';
    if(!root.right) return root.val + '(' + tree2str(root.left) + ')';
    return root.val + '(' + tree2str(root.left) + ')(' + tree2str(root.right) + ')';
};


const tree2str = (root) => {

    let left = ""
    let right = ""
    if(root.left) left = dfs(root.left)
    if(root.right) right = dfs(root.right)

    let test = root.val + left + right
    return root.val + left + right
}

function dfs(root) {
    let str = '('
    if(root.left) str += root.val + dfs(root.left)
    if(!root.left && root.right) str += ')' + '(' + root.val + dfs(root.right)
    else if(root.right) str += dfs(root.right) 
    if(!root.left && !root.right) str += root.val
    return str + ')'
}


var tree2str = function(t) {
    let res = [];
    dfs(t, res);
    return res.join('');

    function dfs(t, res) {
        if (t === null)
            return;

        res.push(t.val);

        if (t.left === null && t.right === null)
            return;

        res.push('(');
        dfs(t.left, res);
        res.push(')');

        if (t.right !== null) {
            res.push('(');
            dfs(t.right, res);
            res.push(')');
        }
    }
};



const tree2str = (root) => {

    let left = ''
    let right = ""
    if(root.left) left += '(' + dfs(root.left) + ')'
    if(root.right) right += dfs(root.right) 

    return root.val + left + right
}

function dfs(root) {
    let str = root.val
    if(root.left) str += dfs(root.left)
    if(!root.left && root.right) str += '()'
    if(root.right) str += dfs(root.right)
    if(!root.left && !root.right) return '(' + root.val + ')'
    return str
}

const tree2str = (root) => {

    let str = ''
    if(root.left) str += root.val + '(' + tree2str(root.left) + ')'
    else if(!root.left && root.right) str += root.val + '()' + tree2str(root.right)
    if(!root.left && !root.right) str += '(' + root.val + ')'    

    return str
   
}



const tree2str = (root) => {

    let str = ''
    if(root.left) str += root.val + '(' + tree2str(root.left) + ')'
    if(!root.left && root.right) str += root.val + '()' + tree2str(root.right)
    else if(root.right) str += tree2str(root.right) 
    if(!root.left && !root.right) return '(' + root.val + ')'

    return str
   
}


const tree2str = (root) => {
    
    let str = root.val

    if(root.left) str += tree2str(root.left)
    if(!root.left && !root.right) return '(' + root.val + ')'
    if(root.left && !root.right) return '(' + root.val
    

    return 
}

*/