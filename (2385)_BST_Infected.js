

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1)
root.right = new TreeNode(3)
root.right.right = new TreeNode(6)
root.right.left = new TreeNode(10)
root.left = new TreeNode(5)
root.left.right = new TreeNode(4)
root.left.right.right = new TreeNode(2)
root.left.right.left = new TreeNode(9)


const amountOfTime = (root, start) => {
    let amount = 0;
    const traverse = (root, start) => {
        if (!root) {
            return 0;
        }

        let left = traverse(root.left, start);
        let right = traverse(root.right, start);

        if (root.val === start) {
            amount = Math.max(left, right);
            return -1;
        } else if (left >= 0 && right >= 0) {
            return Math.max(left, right) + 1;
        } else {
            amount = Math.max(amount, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    }
    traverse(root, start)
    
    return amount;
}

amountOfTime(root,3)

/*
const amountOfTime = (root,start) => {
    
    let time = 1
    if(root.left) time += dfs(root.left,start,0)
    if(root.right) time += dfs(root.right,start,0)

    function dfs(root,start,time) {
        if(root.val === start) time--;
        if(root.left) {
            time += 1;
            dfs(root.left,start,time);
        }
        if(root.right) {
            time += 1;
            dfs(root.right,start,time);
        }
        if(!root.left && !root.right) {
            time -= 1
        }
        if(root.left && root.right) {
            time += 1
        }
        return time;
    }

}

if(root.left) {
        if(!root.left.left && !root.right.right) return 1
        else if(!root.left.left) time = 1 + amountOfTime(root.left,time);
        else time = 1 - amountOfTime(root.left,time)
    }

    if(root.right) {
        if(!root.right.right) time = 1 + amountOfTime(root.right,time);
        else time = 1 - amountOfTime(root.right,time)
    }
*/