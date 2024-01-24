function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(2)
root.left = new TreeNode(3)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(1)
root.right = new TreeNode(1)
root.right.right = new TreeNode(1)


const pseudoPalindromicPaths = (root) => {
    let leafMap = new Map()
    let diffs = 0
    let pals = 0

    function traverse(node) {

        if(!node) return;

        if(!leafMap.get(node.val) || leafMap.get(node.val) === 0) diffs++;
        leafMap.set(node.val,(leafMap.get(node.val) || 0) + 1)
        let left = traverse(node.left)
        let right = traverse(node.right)

        if(!left && !right) {
            let odds = 0
    
            for(let val of leafMap.values()) {
                if(val % 2 !== 0) odds++;
            }
            
            if(diffs === 1 || odds <= 1) pals++;
        }

        leafMap.set(node.val,leafMap.get(node.val) - 1)
        if(leafMap.get(node.val) === 0) diffs--;
        return true
    }

    traverse(root)
    return pals
};

pseudoPalindromicPaths(root)

/*
To be a palindrome the values have to either 
cascade: 3,2,1,2,3
equal: 2,2,2,2
middle equal: 3,2,1,1,1,2,3

X: 3,2,1,4,2,3 four different values, 
3:2, 2:2, 1:1, 4:1

8,9,4,4,4,8

1,8,8,8,1

cant have two odd values

cant have two values at 1 IF there are more than 1 values different

need to find how many different values AND what their counts are
*/
