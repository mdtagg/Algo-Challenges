
function root(val,left,right) {
  this.val = val || null;
  this.left = left || null;
  this.right = right || null;
}

const newRoot = new root(4)
newRoot.left = new root(1)
newRoot.left.left = new root(0)
newRoot.left.right = new root(2)
newRoot.left.right.right = new root(3)
newRoot.right = new root(6)
newRoot.right.left = new root(5)
newRoot.right.right = new root(7)
newRoot.right.right.right = new root(8)

function bstToGst(root) {

  let max = 0

  function traverseGreater(node) {
    if(!node) return;
    traverseGreater(node.right);
    max += node.val;
    node.val = max
    if(node.left) traverseGreater(node.left);
  }
  traverseGreater(root)
  return root
}

bstToGst(newRoot)

/*
CODE GRAVEYARD

let change = 0

  function traverse(node) {
    if(!node) return;
    traverse(node.right);
    traverse(node.left);

    change += node.val
    node.val = change
  }

  traverse(root)
*/

